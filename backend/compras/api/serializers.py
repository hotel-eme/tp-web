from rest_framework import serializers

from .. import models


class ItemListaCompraSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ItemListaCompra
        fields = ['id', 'nome_produto', 'quantidade']
