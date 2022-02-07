import { Link } from "react-router-dom";

export default function Passengers(props) {
  const renderPassengers = () => {
    if (!props.passengers) {
      return null;
    }

    return props.passengers.map((passenger, index) => {
      return (
        <li key={index}>
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/passengers/${passenger.id}`}
          >
            {passenger.last_name}, {passenger.first_name}
          </Link>
        </li>
      );
    });
  };

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{renderPassengers()}</ul>
    </div>
  );
}
