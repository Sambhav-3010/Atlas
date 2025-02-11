const express = require('express');
const Groq = require('groq-sdk');
const router = express.Router();
require('dotenv').config();

async function getGroqChatStream(prompt, apiKey) {
  if (!apiKey) {
    throw new Error("Groq API key is required.");
  }

  const groq = new Groq({ apiKey });

  return groq.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "llama-3.3-70b-versatile",
    temperature: 0.5,
    max_tokens: 1024,
    top_p: 1,
    stream: true,
  });
}

router.post("/chat", async (req, res) => {
  try {
    const { city, food_preferences, places_to_visit, social_preference, duration } = req.body;
    const groqApiKey = process.env.GROQ_API_KEY;

    if (!city || !food_preferences || !places_to_visit || !social_preference || !duration) {
      return res.status(400).json({ success: false, error: "All fields are required." });
    }
    if (!groqApiKey) {
      return res.status(400).json({ success: false, error: "Groq API key is missing." });
    }

    const fixedPrompt = `You are an intelligent travel assistant AI. Based on the following inputs:
    - City: ${city}
    - Food Preferences: ${food_preferences}
    - Types of Places to Visit: ${places_to_visit}
    - Social Preference: ${social_preference}
    - Duration of Stay: ${duration}
    
    Provide a detailed day-by-day itinerary for the user's trip, including specific activities, places to visit, and dining options that align with their preferences. Ensure the recommendations are well-balanced, considering the user's social preference and the duration of their stay. Include brief descriptions for each suggestion to enhance the travel experience. Ensure that all the days are covered`;

    res.setHeader("Content-Type", "application/json");
    let responseContent = "";

    const stream = await getGroqChatStream(fixedPrompt, groqApiKey);
    for await (const chunk of stream) {
      const content = chunk.choices?.[0]?.delta?.content || "";
      responseContent += content;
    }

    res.json({ success: true, response: responseContent });
  } catch (error) {
    console.error("Error in /chat endpoint:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;