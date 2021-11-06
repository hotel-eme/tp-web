from rest_framework import serializers

from .. import models


class AlunoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Aluno
        fields = '__all__'
