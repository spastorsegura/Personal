try:
    numero = int(input("Ingresar un numero"))
    numero/0
except ValueError:
    print('Tiene que se un numero')
except ZeroDivisionError:
    print('No se puede hacer la division entre cero')
except:
    print('hubo un error')
else:
    print('todo fue bien')
finally:
    print('Yo siempre me ejecuto')
    print('Yo soy otra línea de código')
