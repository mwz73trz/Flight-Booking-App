import { Link } from "react-router-dom";

export default function Flights(props) {
  const renderFlights = () => {
    if (!props.flights) {
      return null;
    }

    return props.flights.map((flight, index) => {
      return (
        <li key={index}>
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/flights/${flight.id}`}
          >
            {flight.flight_number}
          </Link>
        </li>
      );
    });
  };

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{renderFlights()}</ul>
    </div>
  );
}
