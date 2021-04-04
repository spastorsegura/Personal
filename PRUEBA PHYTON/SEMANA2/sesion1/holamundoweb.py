from flask import Flask, request
from flask_cors import CORS

#Crear instancia
app=Flask(__name__)

#Habilitar los accesos
CORS(app)
tiendas=[]

#ENDPOINT
@app.route('/')
def index():
    return "Servidor corriendo exitosamente otro"

#Los verbos HTTP
#GET(obtener), POST(enviar), PUT(actualizar), DELETE(eliminar)

@app.route("/tienda/<int:id>",methods=['GET','PUT','DELETE'])
def tienda(id):
    if len(tiendas)>id:
        if request.method=="GET":
            return{
                "ok":True,
                "content":tiendas[id],
                "message":None
            }
        elif request.method=="PUT":
            data=request.get_json()
            tiendas[id]=data
            return{
                "ok":True,
                "content":tiendas[id],
                "message":"Se actualizó la tienda comercial"
            }, 201
        elif request.method=="DELETE":
            #1
            tienda=tiendas.pop(id)
            return{
                "ok":True,
                "content":tienda,
                "message":"Se eliminó la tienda comercial correctamente"
            },200
            #2
            del tiendas[id]
            return{
                "ok":True,
                "content":None,
                "message":"Se eliminó la tienda comercial correctamente"
            },200
        else:
            return{
                "ok":False,
                "content":None,
                "message":"La tienda no existe"
            },200

@app.route("/tienda/buscar/<string:palabra>")
def buscador(palabra):
    resultado=[]
    for tienda in tiendas:
        print(palabra.lower())
        if palabra.lower() in tienda['nombre'].lower():
            resultado.append(tienda)
    if resultado:
        return{
            "ok":True,
            "content":resultado,
            "message":None
        }
    else:
        return{
            "ok":False,
            "content":"No hay resultados",
            "message":None
        },404

@app.route("/tiendas",methods=["GET","POST"])
def manejo_tiendas():
    print(request.method)
    if request.method=="GET":
        if tiendas:
            return{
                "ok":True,
                "content":tiendas,
                "message":None
            }
        else:
            return{
                "ok":False,
                "content":None,
                "message":"No hay tiendas"
            },404
    elif request.method=="POST":
        data=request.get_json()
        tiendas.append(data)
        return{
            "ok":True,
            "content":None,
            "message":"La tienda se agregó exitosamente"
        },201

app.run(debug=True, port=9000)