from flask import Flask, render_template, request
##wvuo vkro hmqd eoiw

import smtplib

from envs import PASSWORD, RECIPIENT
from envs import EMAIL as sender_email
from email.mime.text import MIMEText

app = Flask(__name__)

def send_email(name, email, message, subject):
    msg = MIMEText(message)
    msg['Name'] = name
    msg['Subject'] = subject
    msg['From'] = email

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender_email, PASSWORD)
        server.sendmail(sender_email, RECIPIENT, msg.as_string())

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    subject = request.form.get('subject')

    send_email(name, email, message, subject)


    return 'Contact form submitted successfully'

if __name__ == '__main__':
    app.run()