class Cursos:
    def __init__(self,nombre,precio,dura):
        self.nombre=nombre
        self.precio=precio
        self.dura=dura
    
    def imprimirdetalle(self):
        print(self.nombre,self.precio,self.dura)
    def mensajecosto(self):
        if self.precio>100:
            print("El curso es aceptable")
        else:
            print("El curso es un poco caro")

curso1 = Cursos("Python",200,"1mes")
curso2 = Cursos("Django",300,"1mes")
curso3 = Cursos("Flask",400,"1mes")

curso1.mensajecosto()
curso2.mensajecosto()
curso3.mensajecosto()