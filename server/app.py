from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/', methods=['POST'])
def classify_text():
    data = request.get_json()
    classifier = pipeline("zero-shot-classification", device="cpu")
    candidate_labels = ["anxiety", "anger", "romance", "sexual desire"]
    output = classifier(data["message"], candidate_labels)
    json_output = {
        "labels": str(output["labels"]),
        "scores": str(output["scores"])
    }

    print(json_output)
    return jsonify(labels=output["labels"], scores=output["scores"])

if __name__ == "__main__":
    app.run(debug=True)