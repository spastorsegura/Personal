from rest_framework import serializers
from .models import *

class MostrarProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductoModel
        fields= '__all__'