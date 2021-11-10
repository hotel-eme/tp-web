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

    registro_aluno = models.CharField(
        max_length=10,
        verbose_name='registro de aluno',
        help_text='O número de registro interno do aluno.',
        null=True, blank=True,  # Campo adicionado na após 1.0.0
    )

    data_nascimento = models.DateField(
        verbose_name='data de nascimento',
        help_text='A data de nascimento do aluno.',
        null=True, blank=True,  # Campo adicionado na após 1.0.0
    )

    endereco = models.TextField(
        verbose_name='endereço',
        help_text='O endereço do aluno.',
        null=True, blank=True,  # Campo adicionado na após 1.0.0
    )

    matriculado = models.BooleanField(
        verbose_name='matriculado',
        help_text='Determina se o aluno está matriculado.',
        default=False,
    )

    class Meta:
        verbose_name = 'aluno'
        verbose_name_plural = 'alunos'
