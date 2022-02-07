from rest_framework.viewsets import ModelViewSet
from .serializers import FlightSerializer, PassengerSerializer
from .models import Flight, Passenger

class FlightViewSet(ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
    
class PassengerViewSet(ModelViewSet):
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializer
