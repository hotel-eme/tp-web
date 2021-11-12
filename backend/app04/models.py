from django.db import models


class Cliente(models.Model):

    nome = models.CharField(
        max_length=100,
        verbose_name='nome',
        help_text='O nome do cliente.',
    )

    telefone = models.CharField(
        max_length=20,
        verbose_name='telefone',
        help_text='O telefone do cliente.',
    )

    idade = models.SmallIntegerField(
        verbose_name='idade',
        help_text='A idade do cliente.',
    )

    profissao = models.CharField(
        max_length=100,
        verbose_name='profissão',
        help_text='A profissão do cliente.',
    )

    email = models.EmailField(
        verbose_name='email',
        help_text='O email do cliente.',
    )

    class Meta:
        verbose_name = 'cliente'
        verbose_name_plural = 'clientes'
