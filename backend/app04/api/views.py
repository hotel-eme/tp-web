from rest_framework import response, views, viewsets

from .. import models
from . import serializers


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = models.Cliente.objects.all()
    serializer_class = serializers.ClienteSerializer


class DadosPessoaisAPI(views.APIView):

    def get(self, request):
        return response.Response({
            'nome': 'Zezinho',
            'idade': 12,
            'email': 'zezinho@example.com',
            'profissao': 'Estudante',
        })


class FormacaoAPI(views.APIView):

    def get(self, request):
        return response.Response({
            'formacao': 'Educação infantil',
            'escola': 'UME Samuel Augusto Leão de Moura ',
            'ano_conclusao': '2019',
        })
