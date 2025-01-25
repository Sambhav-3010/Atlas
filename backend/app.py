from flask import Flask, request, jsonify
from promt import process_input
app = Flask(__name__)

@app.route('/', methods=['POST'])
def api():
    data = request.get_json()
    city = data.get('city')
    food_preferences = data.get('food_preferences')
    places_to_visit = data.get('places_to_visit')
    social_preference = data.get('social_preference')
    response = process_input(city, food_preferences, places_to_visit, social_preference)
    return jsonify(response)
if __name__ == '__main__':
    app.run(debug=True)