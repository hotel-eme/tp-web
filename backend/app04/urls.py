from django.urls import path
from rest_framework.routers import DefaultRouter

from . import api

router = DefaultRouter()
router.register('clientes', api.views.ClienteViewSet, basename='cliente')

urlpatterns = [
    *router.urls,
    path('dadospessoais/', api.views.DadosPessoaisAPI.as_view()),
    path('formacao/', api.views.FormacaoAPI.as_view()),
    path('projetos/', api.views.ProjetosAPI.as_view()),
    path('experiencia/', api.views.ExperienciaAPI.as_view()),
]
