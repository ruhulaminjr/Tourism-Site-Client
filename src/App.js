import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddDestination from "./conponents/Pages/AddDestination/AddDestination";
import Login from "./conponents/Pages/Login/Login";
import Headers from "./conponents/Sections/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Headers />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/add-destination">
            <AddDestination/>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
