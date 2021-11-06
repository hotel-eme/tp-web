from rest_framework import viewsets

from alunos import models
from alunos.api import serializers


class AlunoViewSet(viewsets.ModelViewSet):
    queryset = models.Aluno.objects.all()
    serializer_class = serializers.AlunoSerializer
