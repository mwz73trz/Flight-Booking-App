import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Michael Zura Airlines Flight Booking App</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/flights">Flights</Link> |{" "}
        <Link to="/passengers">Passengers</Link>
      </nav>
      <Outlet />
    </div>
  );
}
