from django.conf.urls import url 
from camas import views 
 
urlpatterns = [ 
    url(r'^camas/$', views.cama_list),
    url(r'^camas/(?P<pk>[0-9]+)$', views.cama_detail),
    url(r'^camas/codigo/(?P<age>[0-9]+)/$', views.cama_list_codigo),
]