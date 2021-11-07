from rest_framework import serializers

from .. import models


class TarefaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Tarefa
        fields = ['url', 'id', 'descricao']
