# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='bicycle',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('fabricante', models.CharField(max_length=255)),
                ('modelo', models.CharField(max_length=255)),
                ('cor', models.CharField(max_length=255)),
                ('marcha', models.CharField(max_length=255)),
                ('marcaCambio', models.CharField(max_length=255)),
                ('proprietario', models.CharField(max_length=255)),
                ('celular', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255)),
            ],
        ),
    ]
