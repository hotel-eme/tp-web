from django.db import models


class Aluno(models.Model):

    nome = models.CharField(
        max_length=100,
        verbose_name='nome',
        help_text='O nome do aluno.',
    )

    cpf = models.CharField(
        max_length=11,
        verbose_name='CPF',
        help_text='O número de CPF do aluno.',
    )

    class Meta:
        verbose_name = 'aluno'
        verbose_name_plural = 'alunos'
