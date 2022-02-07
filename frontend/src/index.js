import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FlightsList from "./routes/flightsList";
import PassengersList from "./routes/passengersList";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="flights" element={<FlightsList />} />
        <Route path="passengers" element={<PassengersList />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
