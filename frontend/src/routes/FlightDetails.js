import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import flightBookingAPI from "../api/flightBookingAPI";

export default function FlightDetails() {
  const [flight, setFlight] = useState(null);
  let params = useParams();

  useEffect(() => {
    const getFlight = async () => {
      const data = await flightBookingAPI.fetchFlightById(params.flightId);
      if (data) {
        setFlight(data);
      }
    };

    getFlight();
  }, [params.flightId]);

  const renderFlight = () => {
    if (!flight) {
      return null;
    }

    return (
      <main style={{ padding: "1rem" }}>
        <h2>
          Flight: {flight.flight_number} :{" "}
          {flight.on_time ? "ON-TIME" : "DELAYED"}
        </h2>
        <p>From: {flight.departure_city}</p>
        <p>Scheduled Departure Time: {flight.scheduled_departure}</p>
        <p>Actual Departure Time: {flight.actual_departure}</p>
        <p>To: {flight.arrival_city}</p>
        <p>Scheduled Arrival Time: {flight.scheduled_arrival}</p>
        <p>Actual Arrival Time: {flight.actual_arrival}</p>
        <p>Available Seats: {flight.seats_available}</p>
        <p>Reserved Seats: {flight.reserved_seats}</p>
        <p>Open Seats: {flight.seats_open}</p>
        <p></p>
      </main>
    );
  };

  return <div>{renderFlight()}</div>;
}
