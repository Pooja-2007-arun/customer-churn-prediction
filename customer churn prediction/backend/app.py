from flask import Flask, render_template, request
import pickle
import numpy as np
import pandas as pd

app = Flask(__name__)

# Load model and encoders
model = pickle.load(open("backend/churn_model.pkl", "rb"))
label_encoders = pickle.load(open("backend/label_encoders.pkl", "rb"))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Collect form data
    form_data = request.form.to_dict()

    # Convert to DataFrame (single row)
    input_df = pd.DataFrame([form_data])

    # Apply label encoders to categorical columns
    for col, encoder in label_encoders.items():
        if col in input_df.columns:
            input_df[col] = encoder.transform(input_df[col])

    # Convert all values to numeric
    input_df = input_df.apply(pd.to_numeric, errors='coerce')

    # Make prediction
    prediction = model.predict(input_df)[0]

    # Output message
    output = "Customer will churn" if prediction == 1 else "Customer will stay"

    return render_template('result.html', prediction_text=output)

if __name__ == "__main__":
    app.run(debug=True)
