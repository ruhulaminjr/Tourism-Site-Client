import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddDestination from "./conponents/Pages/AddDestination/AddDestination";
import BookTour from "./conponents/Pages/BookTour/BookTour";
import Home from "./conponents/Pages/Home/Home";
import Login from "./conponents/Pages/Login/Login";
import MyCart from "./conponents/Pages/MyCart/MyCart";
import Headers from "./conponents/Sections/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Headers />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/add-destination">
            <AddDestination />
          </PrivateRoute>
          <PrivateRoute path="/booktour/:id">
            <BookTour />
          </PrivateRoute>
          <PrivateRoute path="/carts">
                <MyCart/>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
