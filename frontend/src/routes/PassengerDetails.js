import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import flightBookingAPI from "../api/flightBookingAPI";

export default function PassengerDetails() {
  const [passenger, setPassenger] = useState(null);
  let params = useParams();

  useEffect(() => {
    const getPassenger = async () => {
      const data = await flightBookingAPI.fetchPassengerById(
        params.passengerId
      );
      if (data) {
        setPassenger(data);
      }
    };

    getPassenger();
  }, [params.passengerId]);

  const renderPassenger = () => {
    if (!passenger) {
      return null;
    }

    return (
      <main style={{ padding: "1rem" }}>
        <h2>
          {passenger.last_name}, {passenger.first_name}
        </h2>
      </main>
    );
  };
  return <div>{renderPassenger()}</div>;
}
