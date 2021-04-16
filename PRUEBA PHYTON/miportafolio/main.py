from flask import Flask, render_template

app=(__name__)

@app.route('/')
def index():
    skills=[
        {
            "curso":"PYTHON",
            "imagen":"img/python.png",
            "descripcion":"Intermedia,avanzado"
        },
        {
            "curso":"FLASK",
            "imagen":"img/flask.png",
            "descripcion":"Avanzado"
        },
        {
            "curso":"DJANGO",
            "imagen":"img/django.png",
            "descripcion":"Avanzado"
        },
        {
            "curso":"html5",
            "imagen":"img/html5.png",
            "descripcion":"Avanzado"
        }
    ]

    return render_template('home.html',skills=skills)

app.run(debug=True)