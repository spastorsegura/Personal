from django.db import models

class Paradigma(models.Model):
    nombre=models.CharField(max_length=50)
    def __str__(self):
        return self.nombre


class Lenguaje(models.Model):
    nombre = models.CharField(max_length=50)
    paradigma=models.ForeignKey(Paradigma,on_delete=models.CASCADE)


# Create your models here.
