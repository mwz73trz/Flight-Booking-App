import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FlightsList from "./routes/flightsList";
import PassengersList from "./routes/passengersList";
import FlightDetails from "./routes/FlightDetails";
import PassengerDetails from "./routes/PassengerDetails";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="flights" element={<FlightsList />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a Flight</p>
              </main>
            }
          />
          <Route path=":flightId" element={<FlightDetails />} />
        </Route>
        <Route path="passengers" element={<PassengersList />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a Flight</p>
              </main>
            }
          />
          <Route path=":passengerId" element={<PassengerDetails />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
