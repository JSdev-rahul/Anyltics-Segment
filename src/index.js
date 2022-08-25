import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AnalyticsProvider } from "./AnalyticsProvider";


ReactDOM.render(
  <React.StrictMode>
     <AnalyticsProvider writeKey='oUpeyYuXfAJV0glsFcjfR1BARroS9lGe'>
    <App />
    </AnalyticsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
