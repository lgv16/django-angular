from django.db import models

# Create your models here.
class Cama(models.Model):

    codigo = models.CharField(max_length=70, blank=False, default='')
    name = models.CharField(max_length=70, blank=False, default='')
    age = models.IntegerField(blank=False, default=1)
    enfermedad = models.CharField(max_length=70, blank=False, default='')
    estado = models.CharField(max_length=70, blank=False, default='')
    aislamiento = models.CharField(max_length=70, blank=False, default='')
    active = models.BooleanField(default=False)