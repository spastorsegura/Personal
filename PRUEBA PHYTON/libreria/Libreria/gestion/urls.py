from django.urls import path
from .views import ListarCategoriaController, CRUDCategoriaController

urlpatterns=[
    path('categorias', ListarCategoriaController.as_view()),
    path('categorias/<int:pk>', CRUDCategoriaController.as_view()),
]