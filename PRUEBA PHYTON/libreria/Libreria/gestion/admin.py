from django.contrib import admin
from .models import CategoriaModel,ProductoModel


class ProductoAdmin(admin.ModelAdmin):
    list_display=['productoId','productoNombre','productoDescripcion','categoria']
    search_fields=['productoNombre','categoria__categoriaNombre']

# Register your models here.
admin.site.register(CategoriaModel)
admin.site.register(ProductoModel,ProductoAdmin)
