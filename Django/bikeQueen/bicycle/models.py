from django.db import models
from django.forms import ModelForm


# Create your models here.
class bicycle(models.Model):
	producer = models.CharField(max_length=255)
	model = models.CharField(max_length=255)
	color = models.CharField(max_length=255)
	gear = models.CharField(max_length=255)
	markExchange = models.CharField(max_length=255)

	own = models.CharField(max_length=255)
	cellPhone = models.CharField(max_length=255)
	email = models.CharField(max_length=255)

class create(ModelForm):
    class Meta:
        model = bicycle
        fields = ['producer','model','color', 'gear', 'markExchange', 'own', 'cellPhone', 'email']