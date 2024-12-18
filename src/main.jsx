import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/redux/store.js";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
