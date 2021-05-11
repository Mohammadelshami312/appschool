import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./Utils/PrivateRoute";
import Navbar from "./components/Navbar";
import { getToken } from "./Utils/Common/common";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import "./App.css";
// import store
import store from "./redux/store";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {console.log(this.props)}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWithStore;
