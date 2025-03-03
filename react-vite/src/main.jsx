import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import configureStore from "./redux/store";
import { router } from "./router";
import * as sessionActions from "./redux/session";
import { restoreCSRF } from "./redux/csrf";
import "./index.css";

const store = configureStore();

// Check if the Flask server is running
fetch('/api/auth/')
  .then(response => {
    console.log("Flask server check - Status:", response.status);
    if (response.ok) {
      console.log("Flask server is running and accessible");
    } else {
      console.warn("Flask server returned an error:", response.status);
    }
  })
  .catch(error => {
    console.error("Could not connect to Flask server:", error);
  });

// Restore CSRF token for both development and production
restoreCSRF();

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);
