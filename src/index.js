
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootId = document.getElementById("root");

ReactDOM.render(<App/>, rootId);

serviceWorker.unregister();
if (module.hot && process.env.NODE_ENV === "development") {
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default;
        ReactDOM.render(<App/>, rootId);
    });
}
