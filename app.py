from flask import Flask, request, render_template, send_file

app = Flask(__name__, template_folder='.', static_folder='.')


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/', defaults={'path': ''})
@app.route('/<path:file>')
def static_content(file):
    print('needed '+file)
    return send_file(file)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
