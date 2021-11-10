from rest_framework import serializers

from .. import models


class TarefaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tarefa
        fields = '__all__'
