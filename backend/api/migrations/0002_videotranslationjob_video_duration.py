# Generated by Django 5.1.2 on 2024-10-25 20:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='videotranslationjob',
            name='video_duration',
            field=models.IntegerField(default=60),
            preserve_default=False,
        ),
    ]
