import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import flightBookingAPI from "../api/flightBookingAPI";
import Passengers from "../components/Passengers";

export default function PassengersList() {
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    const getPassengers = async () => {
      const data = await flightBookingAPI.fetchPassengers();
      if (data) {
        setPassengers(data);
      }
    };

    getPassengers();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <Passengers passengers={passengers} />
      </nav>
      <Outlet />
    </div>
  );
}
