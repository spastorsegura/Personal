nombre= input("ingrese su nombre")
edad= input("ingrese su edad")
ecivil=input("Estado civil")

if ecivil=="C":
    valorec="Casado"
elif ecivil =="V":
    valorec="Viudo"
elif ecivil =="D":
    valorec="Divorciado"
else:
    valorec="Soltero"

print("Hola",nombre,"Su estado civil es:",valorec)