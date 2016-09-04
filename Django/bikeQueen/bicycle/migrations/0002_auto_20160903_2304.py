# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bicycle', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bicycle',
            old_name='celular',
            new_name='cellPhone',
        ),
        migrations.RenameField(
            model_name='bicycle',
            old_name='cor',
            new_name='color',
        ),
        migrations.RenameField(
            model_name='bicycle',
            old_name='fabricante',
            new_name='gear',
        ),
        migrations.RenameField(
            model_name='bicycle',
            old_name='marcaCambio',
            new_name='markExchange',
        ),
        migrations.RenameField(
            model_name='bicycle',
            old_name='marcha',
            new_name='model',
        ),
        migrations.RenameField(
            model_name='bicycle',
            old_name='modelo',
            new_name='own',
        ),
        migrations.RenameField(
            model_name='bicycle',
            old_name='proprietario',
            new_name='producer',
        ),
    ]
