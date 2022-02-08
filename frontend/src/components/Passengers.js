import { NavLink } from "react-router-dom";

export default function Passengers(props) {
  const renderPassengers = () => {
    if (!props.passengers) {
      return null;
    }

    return props.passengers.map((passenger, index) => {
      return (
        <li key={index}>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/passengers/${passenger.id}`}
          >
            {passenger.last_name}, {passenger.first_name}
          </NavLink>
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
