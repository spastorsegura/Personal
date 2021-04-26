from rest_framework import serializers
from .models import CategoriaModel
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.response import Response
from .serializers import MostrarCategoriasSerializer

class ListarCategoriaController(ListCreateAPIView):
    queryset=CategoriaModel.objects.all()
    serializer_class=MostrarCategoriasSerializer

class CRUDCategoriaController(RetrieveUpdateDestroyAPIView):
    queryset=CategoriaModel.objects.all()
    serializer_class=MostrarCategoriasSerializer