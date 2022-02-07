from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Flight, Passenger

class FlightSerializer(ModelSerializer):
    reserved_seats = SerializerMethodField()
    seats_open = SerializerMethodField()
    class Meta:
        model = Flight
        fields = ['id', 'flight_number', 'departure_city', 'scheduled_departure', 'actual_departure', 'arrival_city', 'scheduled_arrival', 'actual_arrival', 'on_time', 'seats_available', 'passengers', 'reserved_seats', 'seats_open']
        
    def get_reserved_seats(self, obj):
        return obj.passengers.count()
    
    def get_seats_open(self, obj):
        return obj.seats_available - obj.passengers.count()
        
class PassengerSerializer(ModelSerializer):
    class Meta:
        model = Passenger
        fields = '__all__'