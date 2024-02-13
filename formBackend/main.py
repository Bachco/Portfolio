from flask import Flask, make_response, request
##wvuo vkro hmqd eoiw

import smtplib

from envs import PASSWORD, RECIPIENT, EMAIL
from email.mime.text import MIMEText

app = Flask(__name__)
app.debug = True

def send_email(name, email, message, subject):
    msg = MIMEText(message)
    msg['Name'] = name
    msg['Subject'] = subject
    msg['From'] = email
    msg['To'] = RECIPIENT

    with smtplib.SMTP_SSL("smtp.gmail.com", 465, local_hostname='localhost') as server:
        server.login(EMAIL, PASSWORD)
        
        print('Logged in')
        server.sendmail(EMAIL, RECIPIENT, msg.as_string() + f'\nEMAIL: {email}\nNAME: {name}')
        print('Sent email')

@app.route('/contact', methods=['POST', 'OPTIONS'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    subject = request.form.get('subject')

    send_email(name, email, message, subject)
    response = make_response('Contact form submitted successfully', 200)
    response.headers['Access-Control-Allow-Origin'] = 'https://www.jozefbachorik.com/'
    return response

if __name__ == '__main__':
    app.run()