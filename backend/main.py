from flask import Flask, jsonify, request
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
import os

ORIGIN = os.getenv('ORIGIN')
app = Flask(__name__)
CORS(app, resources={r"/email": {"origins": ORIGIN}})  # Enable CORS for specific domain

APP_PASSWORD = os.getenv('PASS_EMAIL_APP')
EMAIL = os.getenv('EMAIL')
ALLOWED_ORIGINS = [ORIGIN]

# Initialize the Limiter
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["10 per day", "3 per hour"]
)

def send_email(name, location, from_email, message, subject):
    # Set up the SMTP server
    smtp_server = "smtp.gmail.com"
    smtp_port = 465
    smtp_user = EMAIL
    smtp_password = APP_PASSWORD

    # Format the email message with additional fields
    full_message = f"From: {name} <{from_email}>\nLocation: {location or 'Not provided'}\n\n{message}"

    # Create the email
    msg = MIMEText(full_message, 'plain', 'utf-8')
    msg['Subject'] = f"Kontaktný formulár {subject}"
    msg['From'] = smtp_user
    msg['To'] = os.getenv('EMAIL_TO')

    # Send the email
    try:
        with smtplib.SMTP_SSL(smtp_server, smtp_port) as server:
            server.ehlo('localhost')
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, [os.getenv('EMAIL_TO')], msg.as_string())
    except Exception as e:
        print(f"Failed to send email: {e}")

@app.before_request
def check_origin():
    origin = request.headers.get('Origin')
    if origin not in ALLOWED_ORIGINS:
        return jsonify({'error': 'Origin not allowed'}), 403

@app.route('/email', methods=['POST', 'OPTIONS'])
@limiter.limit("3 per minute")  # Limit this endpoint to 3 requests per minute
def email():
    if request.method == 'OPTIONS':
        # CORS preflight response
        response = jsonify({'status': 'OK'})
        response.headers.add("Access-Control-Allow-Origin", ORIGIN)
        response.headers.add("Access-Control-Allow-Methods", "POST, OPTIONS")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        return response
    
    # For POST requests
    data = request.json
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    subject = request.form.get('subject')
    # first_name = data.get('first_name')
    # last_name = data.get('last_name')
    # location = data.get('location')
    # from_email = data.get('from_email')
    # message = data.get('message')
    
    if not email or not message or not name:
        return jsonify({'error': 'Missing required fields'}), 400

    send_email(name, "", email, message, subject)
    # send_email(name, location, from_email, message, subject)
    response = jsonify({'success': True})
    response.headers.add("Access-Control-Allow-Origin", ORIGIN)
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
