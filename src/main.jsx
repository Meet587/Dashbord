import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeSelector from "./Components/ThemeSelector/ThemeSelector.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeSelector>
      <App />
    </ThemeSelector>
  </React.StrictMode>
);
