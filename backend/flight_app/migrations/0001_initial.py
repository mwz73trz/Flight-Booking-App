# Generated by Django 4.0.2 on 2022-02-07 15:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Flight',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('flight_number', models.CharField(max_length=7)),
                ('departure_city', models.CharField(max_length=50)),
                ('scheduled_departure', models.DateTimeField()),
                ('actual_departure', models.DateTimeField()),
                ('arrival_city', models.CharField(max_length=50)),
                ('scheduled_arrival', models.DateTimeField()),
                ('actual_arrival', models.DateTimeField()),
                ('on_time', models.BooleanField(default=True)),
                ('seats_available', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Passenger',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('flight', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='passengers', to='flight_app.flight')),
            ],
        ),
    ]
