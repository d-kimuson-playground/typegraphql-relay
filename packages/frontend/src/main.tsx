import { StrictMode } from "react"
import { App } from "./app"
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
if (container === null) {
  throw new Error("root element not found.")
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
