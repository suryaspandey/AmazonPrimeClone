import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "antd/dist/antd.css";

// import './index.css'

import { ApiProvider } from "./APIContext.jsx";
import { WatchListProvider } from "./WatchListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider>
    <WatchListProvider>
      <App />
    </WatchListProvider>
  </ApiProvider>
);
