from rest_framework import serializers
from .models import CategoriaModel

class MostrarCategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model=CategoriaModel
        fields='__all__'