# customer-churn-prediction
# Customer Churn Prediction

## 📌 Project Overview

Customer Churn Prediction is a Machine Learning web application that predicts whether a customer is likely to leave (churn) or stay with a company based on customer information.

The project uses a Random Forest Classifier trained on customer data and provides predictions through a user-friendly Flask web application.

---

## 📖 Features

- Predict customer churn using Machine Learning
- Data preprocessing and label encoding
- Random Forest Classification model
- User-friendly web interface using Flask
- Responsive HTML, CSS, and JavaScript
- Model evaluation using Accuracy Score and Confusion Matrix
- Feature Importance visualization

---

## 🛠️ Technologies Used

- Python
- Flask
- Pandas
- NumPy
- Scikit-learn
- Matplotlib
- Seaborn
- HTML
- CSS
- JavaScript

---

## 📂 Project Structure

```
customer_churn_prediction/
│
├── backend/
│   ├── app.py
│   ├── churn_model.pkl
│   ├── label_encoders.pkl
│   └── requirements.txt
│
├── data/
│   └── customer_churn_dataset.csv
│
├── notebooks/
│   └── churn_model_training.ipynb
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   ├── index.html
│   └── result.html
│
└── README.md
```

---

## 📊 Dataset

The dataset contains customer information such as:

- Age
- Gender
- Tenure
- Monthly Charges
- Total Charges
- Contract Type
- Internet Service
- Tech Support
- Online Security
- Payment Method
- Support Calls
- Satisfaction Score
- Churn (Target Variable)

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/customer-churn-prediction.git
```

Move into the project folder

```bash
cd customer-churn-prediction
```

Install dependencies

```bash
pip install -r backend/requirements.txt
```

---

## ▶️ Train the Model

Run the notebook

```
notebooks/churn_model_training.ipynb
```

The notebook will generate

```
churn_model.pkl
label_encoders.pkl
```

inside the backend folder.

---

## ▶️ Run the Flask Application

Navigate to the backend folder

```bash
cd backend
```

Run the application

```bash
python app.py
```

Open your browser

```
http://127.0.0.1:5000/
```

---

## 📈 Machine Learning Model

Algorithm Used:

- Random Forest Classifier

Evaluation Metrics:

- Accuracy Score
- Confusion Matrix
- Classification Report
- Feature Importance

---

## 📷 Application Workflow

1. User enters customer details.
2. Flask receives the input.
3. The trained Random Forest model predicts churn.
4. The prediction is displayed on the result page.

---

## 🚀 Future Enhancements

- Deploy the application online
- Add probability score for predictions
- Compare multiple Machine Learning models
- Add interactive dashboard
- Improve UI with Bootstrap or React
- Store prediction history in a database

---

## 👩‍💻 Author

**Pooja A**

GitHub:https://customer-churn-prediction-3hte.vercel.app/

---

## 📄 License

This project is created for educational and academic purposes.
