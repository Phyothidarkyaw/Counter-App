import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import CounterApp from "./CounterApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <CounterApp />
    </div>
  </StrictMode>,
);
