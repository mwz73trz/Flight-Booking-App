from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FlightViewSet, PassengerViewSet

router = DefaultRouter()
router.register('flights', FlightViewSet, basename='flight')
router.register('passengers', PassengerViewSet, basename='passenger')

urlpatterns = router.urls