from django.shortcuts import render 
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from camas.models import Cama
from camas.serializers import CamaSerializer
 
 
@csrf_exempt
# cama_list(): get list of camas, save a new cama, delete all camas
def cama_list(request):
    if request.method == 'GET':
        camas = Cama.objects.all()
        camas_serializer = CamaSerializer(camas, many=True)
        return JsonResponse(camas_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'
 
    elif request.method == 'POST':
        cama_data = JSONParser().parse(request)
        cama_serializer = CamaSerializer(data=cama_data)
        if cama_serializer.is_valid():
            cama_serializer.save()
            return JsonResponse(cama_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(cama_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        Cama.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
 
 
@csrf_exempt 
# cama_detail(): get/update/delete cama by ‘id’
def cama_detail(request, pk):
    try: 
        cama = Cama.objects.get(pk=pk) 
    except Cama.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        cama_serializer = CamaSerializer(cama) 
        return JsonResponse(cama_serializer.data) 
 
    elif request.method == 'PUT': 
        cama_data = JSONParser().parse(request) 
        cama_serializer = CamaSerializer(cama, data=cama_data) 
        if cama_serializer.is_valid(): 
            cama_serializer.save() 
            return JsonResponse(cama_serializer.data) 
        return JsonResponse(cama_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        cama.delete() 
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
 
    
@csrf_exempt
# cama_list_codigo(): find all cama by ‘codigo(servicio)’
def cama_list_codigo(request, codigo):
    camas = Cama.objects.filter(codigo=codigo)
        
    if request.method == 'GET': 
        camas_serializer = CamaSerializer(camas, many=True)
        return JsonResponse(camas_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'