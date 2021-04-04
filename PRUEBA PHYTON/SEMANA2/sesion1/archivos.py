import csv

def mostrarinformacion():
    csvarchivo = open('data.csv','r',encoding='utf-8')
    entrada=csv.reader(csvarchivo) #Leer todos los registros
    for reg in entrada:
        print(reg)
    csvarchivo.close()
    del csvarchivo

mostrarinformacion()