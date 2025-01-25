from dotenv import load_dotenv
from mira_sdk import MiraClient, Flow
import os

def process_input(city, food_preferences, places_to_visit, social_preference, duration):
    try:
        # Load environment variables
        load_dotenv()

        # Get API key from .env file
        api_key = os.getenv("MIRA_API_KEY")
        if not api_key:
            return {"error": "MIRA_API_KEY is not set in the environment"}

        # Set up MiraClient and load flow
        flow_path = os.path.join(os.path.dirname(__file__), "flow.yaml")
        client = MiraClient(config={"API_KEY": api_key})
        flow = Flow(source=flow_path)

        # Input dictionary
        input_dict = {
            "city": city,
            "food_preferences": food_preferences,
            "places_to_visit": places_to_visit,
            "social_preference": social_preference,
            "duration": duration
        }
        print("Started processing input...")
        print("Input data:", input_dict)
        # Execute flow and return response
        response = client.flow.test(flow, input_dict)
        print(response)
        return response

    except Exception as e:
        return {"error": str(e)}
