# Generated by Django 4.2.7 on 2023-11-14 04:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100, verbose_name='Nombre')),
                ('second_name', models.CharField(max_length=100, verbose_name='Apellido')),
            ],
        ),
    ]