from rest_framework import viewsets

from tarefas import models
from tarefas.api import serializers


class TarefaViewSet(viewsets.ModelViewSet):
    queryset = models.Tarefa.objects.all()
    serializer_class = serializers.TarefaSerializer
