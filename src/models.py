from django.db import models
from .custom_types import EncryptedField

class Tipousuario(models.Model):
    idtipousuario = models.AutoField(primary_key=True)
    descripcion = models.CharField(max_length=100)

    def __str__(self):
        return self.descripcion

class Persona(models.Model):
    idpersona = models.AutoField(primary_key=True)
    nombres = EncryptedField(max_length=300)
    primerapellido = EncryptedField(max_length=300)
    segundoapellido = EncryptedField(max_length=300, blank=True, null=True) 
    birthdate = models.DateField()

    def __str__(self):
        return "{} {} {}".format(self.nombres, self.primerapellido, self.segundoapellido)

class Contacto(models.Model):
    idcontacto = models.AutoField(primary_key=True)
    telefono = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    persona = models.ForeignKey(Persona, models.DO_NOTHING, )

class Direccion(models.Model):
    iddireccion = models.AutoField(primary_key=True)
    idcontacto = models.ForeignKey(Contacto, models.DO_NOTHING, )
    cp = models.IntegerField(blank=True, null=True)
    idestado = models.IntegerField(blank=True, null=True)
    idmunicipio = models.IntegerField(blank=True, null=True)
    idasentamiento = models.IntegerField(blank=True, null=True)

class Usuario(models.Model):
    idusuario = models.AutoField(primary_key=True)
    alias = models.CharField(max_length=45)
    persona = models.ForeignKey(Persona, models.DO_NOTHING, null=True, blank=True)
    email = EncryptedField(max_length=300, unique=True)
    passwd = EncryptedField(max_length=300)
    tipousuario = models.ForeignKey(Tipousuario, models.DO_NOTHING, related_name='tipousuario')
    eliminado = models.BooleanField ()  # This field type is a guess.

    def __str__(self):
        return self.alias

class Cuenta(models.Model):
    idcuenta = models.AutoField(primary_key=True)
    fechaingreso = models.DateTimeField()
    activa = models.BooleanField()  # This field type is a guess.
    usuario = models.ForeignKey(Usuario, models.DO_NOTHING)
    eliminado = models.BooleanField()  # This field type is a guess.
    fechasalida = models.DateTimeField(blank=True, null=True)

class Keyword(models.Model):
    idkeyword = models.AutoField(primary_key=True)
    descripcion = models.CharField(max_length=50)

    def __str__(self):
        return self.descripcion

class Categoria(models.Model):
    idcategoria = models.AutoField(primary_key=True)
    descripcion = models.CharField(max_length=45)
    def __str__(self):
        return self.descripcion

class Articulo(models.Model):
    idarticulo = models.AutoField(primary_key=True)
    nombrearticulo = models.CharField(max_length=250)
    descripcion = models.CharField(max_length=1000, blank=True, null=True)
    cantidad = models.IntegerField()
    costo = models.FloatField()
    eliminado = models.BooleanField()
    keywords = models.ManyToManyField(Keyword)
    categorias = models.ManyToManyField(Categoria)

    def __str__(self):
        return self.nombrearticulo

class Stock(models.Model):
    idstock = models.AutoField(primary_key=True)
    cuenta = models.ForeignKey(Cuenta, models.DO_NOTHING)
    articulos = models.ManyToManyField(Articulo, blank=True)

class Cart(models.Model):
    idcart = models.AutoField(primary_key=True)
    cuenta = models.ForeignKey(Cuenta, models.DO_NOTHING)
    articulos = models.ManyToManyField(Articulo, blank=True)

class Foto(models.Model):
    idfoto = models.AutoField(primary_key=True)
    url = models.CharField(max_length=450)
    articulo = models.ForeignKey(Articulo, models.DO_NOTHING)

    def __str__(self):
        return self.url