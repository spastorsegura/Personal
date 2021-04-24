from django.db import models

# Create your models here.
class CategoriaModel(models.Model):
    categoriaId=models.AutoField(
        primary_key=True,
        unique=True,
        null=False,
        db_column='id',
    )
    categoriaNombre=models.CharField(
        max_length=45,
        null=False,
        db_column='nombre',
        verbose_name='nombre',
        help_text='Nombre de la categoria'
    )
    class Meta:
        db_table='categorias'
        verbose_name='categoria'
        verbose_name_plural='categorias'

class ProductoModel(models.Model):
    productoId=models.AutoField(
        primary_key=True,
        unique=True,
        null=False,
        db_column='id'
    )
    productoNombre=models.CharField(
        null=False,
        db_column='nombre',
        help_text='Nombre del producto',
        max_length=45
    )
    productoPrecio=models.DecimalField(
        max_digits=4,
        decimal_places=2,
        db_column='precio',
        verbose_name='precio del producto',
        help_text='precio del producto',
    )
    productoDescripcion=models.TextField(
        db_column='descripcion'
    )
    productoCantidad=models.IntegerField(
        db_column='cantidad',
        null=False
    )
    #Relaciones
    #CASCADE > elimina al padre y al hijo **recomendado
    #PROTECT > No elimina padre si tiene hijos
    #SET_NULL > Elimina al padre y luego hijos
    #DO_NOTHING > no hace nada
    #RESTRICT > no elimina y avisa, parecido a PROTECT
    categoria=models.ForeignKey(
        to=CategoriaModel,
        db_column='categorias_id',
        on_delete=models.CASCADE,
        related_name='categoriaProductos',
        verbose_name='categoria',
        help_text='categoria del producto'
    )

    class Meta:
        db_table='productos'
        verbose_name='producto'

class CabeceraModel(models.Model):
    TIPO_VENTA=[
        ('VEN','VENTA'),
        ('COM','COMPRA'),
    ]
    cabeceraId=models.AutoField(
        primary_key=True,
        null=False,
        db_column='id'
    )
    cabeceraFecha=models.DateTimeField(
        null=False,
        db_column='fecha'
    )
    cabeceraTipo=models.CharField(
        max_length=45,
        db_column='tipo',
        null=False,
        verbose_name='tipo de la cabecera',
        choices=TIPO_VENTA,
    )

    class Meta:
        db_table='cabecera'
        verbose_name='cabecera'

class DetalleModel(models.Model):
    detalleId=models.AutoField(
        primary_key=True,
        null=False,
        db_column='id'
    )
    detalleCantidad=models.IntegerField(
        null=False,
        db_column='cantidad',
        verbose_name='cantidad',
        help_text='cantidad de producto a comprar'
    )
    detallePrecio=models.DecimalField(
        max_digits=4,
        decimal_places=2,
        db_column='precio',
        verbose_name='precio',
        help_text='precio del producto'
    )

    producto=models.ForeignKey(
        to=ProductoModel,
        on_delete=models.CASCADE,
        related_name='productoDetalles',
        db_column='producto_id'
    )
    cabecera=models.ForeignKey(
        to=CabeceraModel,
        on_delete=models.CASCADE,
        related_name='cabeceraDetalles',
        db_column='cabecera_id'
    )

    class Meta:
        db_table='cabecera'
        verbose_name='cabecera'
