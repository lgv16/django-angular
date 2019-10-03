from rest_framework import serializers 
from camas.models import Cama
 
 
class CamaSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Cama
        fields = ('id',
                  'codigo',
                  'name',
                  'age',
                  'enfermedad',
                  'estado',
                  'aislamiento',
                  'active')