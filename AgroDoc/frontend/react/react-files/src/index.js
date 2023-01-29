import React from "react";
import ReactDOM from "react-dom";
import Salom from "./Salom";
import { Provider } from "react-redux";
import store from "./components/Reducers/store";

import { loadUser } from "./components/Actions/User";
import { CookiesProvider } from "react-cookie";
// console.log = console.warn = console.error = () => {};
function Root() {
   return (
      <Provider store={store}>
         <Salom />
      </Provider>
   );
}

export default Root;

ReactDOM.render(
   <React.StrictMode>
      <Root />
   </React.StrictMode>,
   document.getElementById("root")
);
