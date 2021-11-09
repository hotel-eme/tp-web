from django.db import models


class Produto(models.Model):

    nome = models.CharField(
        max_length=100,
        verbose_name='nome',
        help_text='Nome do produto.',
    )

    class Meta:
        verbose_name = 'produto'
        verbose_name_plural = 'produtos'


class ListaCompras(models.Model):

    nome = models.CharField(
        max_length=100,
        verbose_name='nome',
        help_text='Nome da lista de compras, como "farmácia", ou "mercado".',
    )

    class Meta:
        verbose_name = 'lista de compras'
        verbose_name_plural = 'listas de compras'


class ItemListaCompra(models.Model):

    produto = models.ForeignKey(
        to='compras.Produto',
        on_delete=models.CASCADE,
        verbose_name='produto',
        help_text='O produto a ser comprado.',
    )

    lista_compra = models.ForeignKey(
        to='compras.ListaCompras',
        on_delete=models.CASCADE,
        verbose_name='lista de compra',
        help_text='A lista de compra deste item.',
    )

    quantidade = models.DecimalField(
        decimal_places=2,
        max_digits=6,
        verbose_name='quantidade',
        help_text='A quantidade a ser comprada do produto.',
    )

    class Meta:
        verbose_name = 'item de lista de compras'
        verbose_name_plural = 'itens de lista de compras'
