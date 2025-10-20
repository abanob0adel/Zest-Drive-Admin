import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";
import ReactQuery from "./lib/ReactQuery.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQuery>
      <App />
    </ReactQuery>
    <Toaster />
  </StrictMode>
);
