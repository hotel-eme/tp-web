# Generated by Django 3.2.9 on 2021-11-07 04:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tarefa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descricao', models.CharField(help_text='A descrição da tarefa.', max_length=100, verbose_name='descrição')),
            ],
            options={
                'verbose_name': 'tarefa',
                'verbose_name_plural': 'tarefas',
            },
        ),
    ]
