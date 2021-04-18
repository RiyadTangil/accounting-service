import logo from './logo.svg';
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard"
import Home from "./Components/Home/Home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivetRoute from './Components/Login/PrivetRoute/PrivetRoute';


import AddService from './Components/AddService/AddService';
import Book from './Components/Book/Book/Book';
import BookList from './Components/BookList/BookList/BookList';
import Review from './Components/Review/Review';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import OrderList from './Components/OrderList/OrderList/OrderList';


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
            <PrivetRoute path="/book">
              <Book></Book>
            </PrivetRoute>
         
            <PrivetRoute path="/review">
            <Review></Review>
            </PrivetRoute>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/makeAdmin">
             <AddAdmin></AddAdmin>
            </Route>
            <Route path="/bookList">
          <BookList></BookList>
            </Route>
            <Route path="/orderList">
        <OrderList></OrderList>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
          </Switch>
        </Router>
      </UserOrder.Provider>
    </UserContext.Provider>
  );
}

export default App;
