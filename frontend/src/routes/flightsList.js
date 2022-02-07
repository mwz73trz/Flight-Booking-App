import { useState, useEffect } from "react";
import flightBookingAPI from "../api/flightBookingAPI";
import Flights from "../components/Flights";

export default function FlightsList() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const getFlights = async () => {
      const data = await flightBookingAPI.fetchFlights();
      if (data) {
        setFlights(data);
      }
    };

    getFlights();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <Flights flights={flights} />
      </nav>
    </div>
  );
}
