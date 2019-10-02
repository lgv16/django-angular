from rest_framework import serializers 
from camas.models import Camas
 
 
class CamaSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Cama
        fields = ('id','codigo'
                  'name',
                  'age','enfermedad', 'estado','aislamiento',
                  'active')