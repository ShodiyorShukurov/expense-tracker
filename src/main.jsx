import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider as RootProvider } from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RootProvider>
    <App />
  </RootProvider>
);
