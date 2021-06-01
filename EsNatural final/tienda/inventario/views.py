from django.shortcuts import render
from rest_framework.views import ListAPIView
from .models import *
from .serializers import *
from rest_framework.response import Response

class ListarProductoController(ListAPIView):
    queryset=ProductoModel.objects.all()
    serializer_class=MostrarProductosSerializer

