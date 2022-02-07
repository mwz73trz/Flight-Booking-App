from django.db import models

class Flight(models.Model):
    flight_number = models.CharField(max_length=7)
    departure_city = models.CharField(max_length=50)
    scheduled_departure = models.DateTimeField()
    actual_departure = models.DateTimeField()
    arrival_city = models.CharField(max_length=50)
    scheduled_arrival = models.DateTimeField()
    actual_arrival = models.DateTimeField()
    on_time = models.BooleanField(default=True)
    seats_available = models.IntegerField()
    
    def __str__(self):
        return f"{self.flight_number}"
    
class Passenger(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE, related_name="passengers")
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
