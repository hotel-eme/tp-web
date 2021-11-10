from django.db import models


class ItemListaCompra(models.Model):

    nome_produto = models.CharField(
        max_length=100,
        verbose_name='nome do produto',
        help_text='O nome do produto a ser comprado.',
    )

    quantidade = models.DecimalField(
        decimal_places=2,
        max_digits=6,
        verbose_name='quantidade',
        help_text='A quantidade a ser comprada do produto.',
    )

    class Meta:
        verbose_name = 'item da lista de compras'
        verbose_name_plural = 'itens da lista de compras'
