from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app=flask(__name__)
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='Anotherpl@ce1'
app.config['MYSQL_DB']='test'

mysql = MySQL(app)
@app.route('/')
def inicio():
    return 'La api funciona correctamente'

app.run(debug=True)