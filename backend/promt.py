from dotenv import load_dotenv
from mira_sdk import MiraClient, Flow
import os
from flask import jsonify

def process_input(city, food_preferences, places_to_visit, social_preference):
    try:
        flow_path = os.path.join(os.path.dirname(__file__), "flow.yaml")
        load_dotenv()
        api_key = os.getenv("MIRA_API_KEY")
        if not api_key:
            return jsonify({"error": "MIRA_API_KEY is not set in the environment"}), 500
        client = MiraClient(config={"API_KEY": api_key})
        flow = Flow(source=flow_path)
        input_dict = {
            "city": city,
            "food_preferences": food_preferences,
            "places_to_visit": places_to_visit,
            "social_preference": social_preference
        }
        response = client.flow.test(flow, input_dict)
        return response
    except Exception as e:
        return jsonify({"error": str(e)}), 500
