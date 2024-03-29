# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Articulo(models.Model):
    nombrearticulo = models.CharField(db_column='nombreArticulo', max_length=250)  # Field name made lowercase.
    descripcion = models.CharField(max_length=1000, blank=True, null=True)
    cantidad = models.IntegerField()
    costo = models.FloatField()
    eliminado = models.TextField()  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'articulo'


class ArticuloHasKeywords(models.Model):
    articulo = models.ForeignKey(Articulo, models.DO_NOTHING, db_column='Articulo_id', primary_key=True)  # Field name made lowercase.
    keywords_idkeywords = models.ForeignKey('Keywords', models.DO_NOTHING, db_column='KeyWords_idKeyWords')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'articulo_has_keywords'
        unique_together = (('articulo', 'keywords_idkeywords'),)


class ArticuloTieneCategoria(models.Model):
    articulo = models.ForeignKey(Articulo, models.DO_NOTHING, db_column='Articulo_id')  # Field name made lowercase.
    categoria_idcategoria = models.ForeignKey('Categoria', models.DO_NOTHING, db_column='Categoria_idCategoria')  # Field name made lowercase.
    idarticulocategoria = models.AutoField(db_column='idArticuloCategoria', primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'articulo_tiene_categoria'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Categoria(models.Model):
    idcategoria = models.AutoField(db_column='idCategoria', primary_key=True)  # Field name made lowercase.
    descripcion = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'categoria'


class Contacto(models.Model):
    telefono = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    idpersona = models.ForeignKey('Persona', models.DO_NOTHING, db_column='idPersona')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'contacto'


class Cuenta(models.Model):
    idcuenta = models.AutoField(db_column='idCuenta', primary_key=True)  # Field name made lowercase.
    fechaingreso = models.DateTimeField(db_column='fechaIngreso')  # Field name made lowercase.
    activa = models.TextField()  # This field type is a guess.
    idusuario = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='idUsuario')  # Field name made lowercase.
    eliminado = models.TextField()  # This field type is a guess.
    fechasalida = models.DateTimeField(db_column='fechaSalida', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'cuenta'


class Direccion(models.Model):
    idcontacto = models.ForeignKey(Contacto, models.DO_NOTHING, db_column='idContacto')  # Field name made lowercase.
    cp = models.IntegerField(blank=True, null=True)
    idestado = models.IntegerField(db_column='idEstado', blank=True, null=True)  # Field name made lowercase.
    idmunicipio = models.IntegerField(db_column='idMunicipio', blank=True, null=True)  # Field name made lowercase.
    idasentamiento = models.IntegerField(db_column='idAsentamiento', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'direccion'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Foto(models.Model):
    url = models.CharField(max_length=450)
    idarticulo = models.ForeignKey(Articulo, models.DO_NOTHING, db_column='idArticulo')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'foto'


class Keywords(models.Model):
    idkeywords = models.AutoField(db_column='idKeyWords', primary_key=True)  # Field name made lowercase.
    descripcio = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'keywords'


class Persona(models.Model):
    nombres = models.CharField(max_length=300)
    primerapellido = models.CharField(db_column='primerApellido', max_length=300)  # Field name made lowercase.
    segundoapellido = models.CharField(db_column='segundoApellido', max_length=300, blank=True, null=True)  # Field name made lowercase.
    birthdate = models.DateField(db_column='birthDate')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'persona'


class Stock(models.Model):
    idstock = models.AutoField(db_column='idStock', primary_key=True)  # Field name made lowercase.
    idcuenta = models.ForeignKey(Cuenta, models.DO_NOTHING, db_column='idCuenta')  # Field name made lowercase.
    idarticulo = models.ForeignKey(Articulo, models.DO_NOTHING, db_column='idArticulo')  # Field name made lowercase.
    fechaingreso = models.DateTimeField(db_column='fechaIngreso')  # Field name made lowercase.
    eliminado = models.TextField()  # This field type is a guess.
    fechasalida = models.DateTimeField(db_column='fechaSalida', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'stock'


class Tipousuario(models.Model):
    idtipousuario = models.AutoField(db_column='idTipoUsuario', primary_key=True)  # Field name made lowercase.
    descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tipousuario'


class Usuario(models.Model):
    idusuario = models.AutoField(db_column='idUsuario', primary_key=True)  # Field name made lowercase.
    alias = models.CharField(max_length=45)
    idpersona = models.ForeignKey(Persona, models.DO_NOTHING, db_column='idPersona')  # Field name made lowercase.
    email = models.CharField(unique=True, max_length=300)
    passwd = models.CharField(max_length=300)
    idtipousuario = models.ForeignKey(Tipousuario, models.DO_NOTHING, db_column='idTipoUsuario')  # Field name made lowercase.
    eliminado = models.TextField()  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'usuario'
