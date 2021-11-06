from rest_framework import serializers

from .. import models


class AlunoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Aluno
        fields = ['url', 'id', 'nome', 'cpf']
