class ejemplo:
    __atributo_privado="soy un atributo inalcanzable desde afuera de mi entorno"
    def __metodo_privado(self):
        print("soy un metodo privado inalcanzable de mi entorno")
    def atributo_publico(self):
        return self.__atributo_privado
    def metodo_publico(self):
        return self.__metodo_privado()

e=ejemplo()
e.atributo_publico
e.metodo_publico()

