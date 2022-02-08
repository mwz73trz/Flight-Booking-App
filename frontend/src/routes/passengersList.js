import { useState, useEffect } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import flightBookingAPI from "../api/flightBookingAPI";

export default function PassengersList() {
  const [passengers, setPassengers] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getPassengers = async () => {
      const data = await flightBookingAPI.fetchPassengers();
      if (data) {
        setPassengers(data);
      }
    };

    getPassengers();
  }, []);

  const renderPassengers = () => {
    if (!passengers) {
      return null;
    }
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          <input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {passengers
            .filter((passenger) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let last_name = passenger.last_name.toLowerCase();
              return last_name.startsWith(filter.toLowerCase());
            })
            .map((passenger) => (
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to={`/passengers/${passenger.id}`}
                key={passenger.id}
              >
                {passenger.last_name}, {passenger.first_name}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    );
  };

  return <div>{renderPassengers()}</div>;
}
