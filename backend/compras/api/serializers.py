from rest_framework import serializers

from .. import models


class ItemListaCompraSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ItemListaCompra
        fields = '__all__'
