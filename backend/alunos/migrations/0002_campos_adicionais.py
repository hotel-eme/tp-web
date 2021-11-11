# Generated by Django 3.2.9 on 2021-11-10 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alunos', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='aluno',
            name='data_nascimento',
            field=models.DateField(blank=True, help_text='A data de nascimento do aluno.', null=True, verbose_name='data de nascimento'),
        ),
        migrations.AddField(
            model_name='aluno',
            name='endereco',
            field=models.TextField(blank=True, help_text='O endereço do aluno.', null=True, verbose_name='endereço'),
        ),
        migrations.AddField(
            model_name='aluno',
            name='matriculado',
            field=models.BooleanField(default=False, help_text='Determina se o aluno está matriculado.', verbose_name='matriculado'),
        ),
        migrations.AddField(
            model_name='aluno',
            name='registro_aluno',
            field=models.CharField(blank=True, help_text='O número de registro interno do aluno.', max_length=10, null=True, verbose_name='registro de aluno'),
        ),
    ]
