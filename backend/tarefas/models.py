from django.db import models


class Tarefa(models.Model):

    descricao = models.CharField(
        max_length=100,
        verbose_name='descrição',
        help_text='A descrição da tarefa.',
    )

    class Meta:
        verbose_name = 'tarefa'
        verbose_name_plural = 'tarefas'
