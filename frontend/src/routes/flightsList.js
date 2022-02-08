import { useState, useEffect } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import flightBookingAPI from "../api/flightBookingAPI";

export default function FlightsList() {
  const [flights, setFlights] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getFlights = async () => {
      const data = await flightBookingAPI.fetchFlights();
      if (data) {
        setFlights(data);
      }
    };

    getFlights();
  }, []);

  const renderFlights = () => {
    if (!flights) {
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
          {flights
            .filter((flight) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let flight_number = flight.flight_number.toLowerCase();
              return flight_number.startsWith(filter.toLowerCase());
            })
            .map((flight) => (
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to={`/flights/${flight.id}`}
                key={flight.id}
              >
                {flight.flight_number}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    );
  };

  return <div>{renderFlights()}</div>;
}
