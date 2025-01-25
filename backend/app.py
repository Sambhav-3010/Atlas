from flask import Flask, json, request, jsonify
from flask_cors import cross_origin, CORS
from process import process_input
import os

app = Flask(__name__)

@app.route('/', methods=['POST'])
@cross_origin(supports_credentials=True, origins="*")
def api():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Invalid input data"}), 400

        city = data.get('destination')
        food_preferences = data.get('food')
        places_to_visit = data.get('places')
        social_preference = data.get('social')
        duration = data.get('duration')

        print(city, food_preferences, places_to_visit, social_preference, duration)

        if not all([city, food_preferences, places_to_visit, social_preference, duration]):
            return jsonify({"error": "All fields are required"}), 400

        response = process_input(city, food_preferences, places_to_visit, social_preference, duration)
        file_path = 'response.json'
        
        if os.path.exists(file_path):
            os.remove(file_path)
    
        with open(file_path, 'w') as f:
            json.dump(response, f)
        
        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/get', methods=['GET'])
@cross_origin(supports_credentials=True, origins="*")
def get():
    try:
        file_path = 'response.json'
        if not os.path.exists(file_path):
            return jsonify({"error": "No response found"}), 404

        with open(file_path, 'r') as f:
            response = json.load(f)
        
        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
    finally:
        if os.path.exists(file_path):
            with open(file_path, 'w') as f:
                f.truncate(0)

if __name__ == '__main__':
    app.run(debug=True)