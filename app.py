from flask import Flask, request, render_template, send_file, abort
from pymongo import MongoClient
import os

client = MongoClient(os.environ.get("DB_STRING"))
app = Flask(__name__, template_folder='', static_folder='')

DB_NAME = 'kikkiller'

DB = {
    "users": client[DB_NAME].users,
    "messages": client[DB_NAME].messages,
    "chats": client[DB_NAME].chats
}


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/user/register', methods=['POST'])
def register():
    data = request.get_json()
    if 'username' in data and 'password' in data and 'confirm_password' in data:
        if data['password'] == data['confirm_password']:
            try:
                data['password'] = Security.hash(data['password'])
                del data['confirm_password']
                id = DB['users'].insert_one(data).inserted_id
                return Response.success({'id': str(id)})
            except Exception as e:
                print(e)
                return Response.fail('Failed to register')
    return Response.missing_required(['username', 'password', 'confirm_password'] - set(data.keys()))

@app.route('/user/login', methods=['POST'])
def login():
    data = request.get_json()
    if 'username' in data and 'password' in data:
        user = DB['users'].find_one({'username': data['username']})
        if user and user['password'] == Security.hash(data['password']):
            return Response.success({'id': str(user['_id'])})
    return Response.fail('Failed to login')

# Helper functions
class Response:
    @staticmethod
    def missing_required(fields):
        return {'success': False, 'error': 'Missing required fields: ' + ', '.join(fields)}

    @staticmethod
    def success(data):
        return {'success': True, 'data': data}

    @staticmethod
    def fail(message):
        return {'success': False, 'message': message}


class Security:
    @staticmethod
    def hash(password):
        key = 99991
        password_sum = ""
        for char in password:
            password_sum += str(ord(char))
        larger_number = ""
        for i in range(0,len(password_sum),8):
            larger_number = larger_number + hex(int(password_sum[i:i+8])*key)[2:]
        return larger_number


if __name__ == '__main__':
    app.run(debug=True, host=os.environ.get("SERVER_HOST"),
            port=os.environ.get("SERVER_PORT"))
