from flask import Flask, request, jsonify
from process import process_input

app = Flask(__name__)

@app.route('/', methods=['POST'])
def api():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Invalid input data"}), 400

        city = data.get('city')
        food_preferences = data.get('food_preferences')
        places_to_visit = data.get('places_to_visit')
        social_preference = data.get('social_preference')
        duration = data.get('duration')

        if not all([city, food_preferences, places_to_visit, social_preference, duration]):
            return jsonify({"error": "All fields are required"}), 400

        # Call process_input
        response = process_input(city, food_preferences, places_to_visit, social_preference, duration)

        # Ensure response is JSON serializable
        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)