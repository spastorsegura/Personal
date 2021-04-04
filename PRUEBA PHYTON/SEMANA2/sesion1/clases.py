class Persona:
    def __init__(self,nombre,ocupacion):
        self.nombre=nombre
        self.ocupacion=ocupacion
        self.preferencias=[]

    def saludar(self):
        print('Bienvenido{}'.format(self.nombre))

objPersona=Persona('Jose','Informatico')
print(objPersona.preferencias)
objPersona.saludar()