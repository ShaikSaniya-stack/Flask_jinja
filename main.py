from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def home():
    students=['Alice','Bob','Charlie']
    return render_template('index.html',students=students)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def about():
    return render_template('contact.html')



if __name__== '__main__':
    app.run(debug=True,port=5000)
