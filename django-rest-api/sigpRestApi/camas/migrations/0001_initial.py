# Generated by Django 2.2.6 on 2019-10-02 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Camas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo', models.CharField(default='', max_length=70)),
                ('name', models.CharField(default='', max_length=70)),
                ('age', models.IntegerField(default=1)),
                ('enfermedad', models.CharField(default='', max_length=70)),
                ('estado', models.CharField(default='', max_length=70)),
                ('aislamiento', models.CharField(default='', max_length=70)),
                ('active', models.BooleanField(default=False)),
            ],
        ),
    ]