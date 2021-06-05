
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard"
import Home from "./Components/Home/Home/Home"
import "./App.css"
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivetRoute from './Components/Login/PrivetRoute/PrivetRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddService from './Components/AddService/AddService';
import Book from './Components/Book/Book/Book';
import BookList from './Components/BookList/BookList/BookList';
import Review from './Components/Review/Review';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import OrderList from './Components/OrderList/OrderList/OrderList';
import ManageService from './Components/ManageService/ManageService/ManageService';
import OurCapability from './Components/Home/OutCapability/OurCapability';
import Profile from "./Components/Dashboard/Profile/Profile";
export const UserContext = createContext()
export const UserOrder = createContext()



function App() {


  const [loggedInUser, setLoggedInUser] = useState({})
  const [order, setOrder] = useState({})
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <UserOrder.Provider value={[order, setOrder]}>

        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/dashboard/orderList">
              <OrderList></OrderList>
            </Route>
          
            <Route path="/dashboard/addService">
              <AddService></AddService>
            </Route>
            <Route path="/dashboard/makeAdmin">
              <AddAdmin></AddAdmin>
            </Route>
            <Route path="/dashboard/review">
              <Review></Review>
            </Route>
            <PrivetRoute path="/dashboard/book">

              <Book></Book>
            </PrivetRoute>
            <PrivetRoute path="/dashboard/profile">

              <Profile></Profile>
            </PrivetRoute>

            <Route path="/dashboard/bookList">
              <BookList></BookList>
            </Route>
            <Route path="/about">
              <OurCapability></OurCapability>
            </Route>

            {/* <PrivetRoute path="/dashboard/:items">
              <Dashboard></Dashboard>
            </PrivetRoute> */}

          </Switch>
        </Router>

      </UserOrder.Provider>
    </UserContext.Provider>

  );
}

export default App;
