from django.db import models

# Create your models here.
class bicycle(models.Model):
	fabricante = models.CharField(max_length=255)
	modelo = models.CharField(max_length=255)
	cor = models.CharField(max_length=255)
	marcha = models.CharField(max_length=255)
	marcaCambio = models.CharField(max_length=255)
	proprietario = models.CharField(max_length=255)
	celular = models.CharField(max_length=255)
	email = models.CharField(max_length=255)

#class bicycleForm(ModelForm):
#    class Meta:
#        model = Formulario
#        fields = ['fabricante','modelo','cor', 'marcha', 'marcaCambio', 'proprietario', 'celular', 'email']