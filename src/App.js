import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "components/pages/Login";
import GlobalStyle from "./theme/GlobalStyle";

import { initializeStore } from "./store/store";

const store = initializeStore();
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={props => <Login {...props} />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
