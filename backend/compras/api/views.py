from django.db.models.query import QuerySet
from rest_framework import viewsets

from .. import models
from . import serializers


class ItemListaCompraViewSet(viewsets.ModelViewSet):
    queryset = models.ItemListaCompra.objects.all()
    serializer_class = serializers.ItemListaCompraSerializer
