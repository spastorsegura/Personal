class vehiculo:
    def __init__(self,marca,color):
        self.m=marca
        self.n=color

    def mensaje(self):
        if self.m=="toyota":
            print("Marca es recomendable")
        else:
            print("Marca a evaluar")

class Auto(vehiculo):
    def __init__(self,precio):
        self.pre=precio

objeto1=Auto(8000)
objeto1.m="toyota"
objeto1.mensaje()
