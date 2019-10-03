# django-angular

Technologies
– Django 2.1
– Angular 6
– RxJS 6

sudo apt install python3-django
sudo apt install python3-pip

sudo apt-get install python3.6-dev libmysqlclient-dev
pip3 install mysqlclient==1.3.13 django djangorestframework gunicorn coverage django-cors-headers



https://grokonez.com/python/django-angular-6-example-django-rest-framework-mysql-crud-example-part-2-django-server

customers=camas

from django.db import models

# Create your models here.
class Camas(models.Model):

    codigo = models.CharField(max_length=70, blank=False, default='')
    name = models.CharField(max_length=70, blank=False, default='')
    age = models.IntegerField(blank=False, default=1)
    enfermedad = models.CharField(max_length=70, blank=False, default='')
    estado = models.CharField(max_length=70, blank=False, default='')
    aislamiento = models.CharField(max_length=70, blank=False, default='')
    active = models.BooleanField(default=False)


    user_test
    Secret.123