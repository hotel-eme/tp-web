# Generated by Django 3.2.9 on 2021-11-09 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ItemListaCompra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_produto', models.CharField(help_text='O nome do produto a ser comprado.', max_length=100, verbose_name='nome do produto')),
                ('quantidade', models.DecimalField(decimal_places=2, help_text='A quantidade a ser comprada do produto.', max_digits=6, verbose_name='quantidade')),
            ],
            options={
                'verbose_name': 'item da lista de compras',
                'verbose_name_plural': 'itens da lista de compras',
            },
        ),
    ]
