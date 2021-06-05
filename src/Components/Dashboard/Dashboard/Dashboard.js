import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import './deshboard.css'

import { Link, useHistory, useParams } from 'react-router-dom';
import AddAdmin from '../../AddAdmin/AddAdmin';
import AddService from '../../AddService/AddService';
import Book from '../../Book/Book/Book';
import BookList from '../../BookList/BookList/BookList';
import OrderList from '../../OrderList/OrderList/OrderList';
import Profile from '../Profile/Profile';
import SIdeBar from '../SideBar/SIdeBar';

const Dashboard = () => {


return (


  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Col >
      <Nav variant="pills" className="flex-column nav-container ">
        <Nav.Item>
          <Nav.Link eventKey="first">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="text-light pl-2" to="/dashboard/book">book</Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Order List</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Book list </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="orderList">Review</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="orderList">make admin</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="book">Add Service </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="book">Book </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="text-light pl-2" to="/">Home page</Link>
        </Nav.Item>
      </Nav>
    </Col>
    {/* <Col  sm={9}>
      <Tab.Content>
        <Tab.Pane  eventKey="first">
          <Profile></Profile>
        </Tab.Pane>
      </Tab.Content>
      <Tab.Content>
        <Tab.Pane eventKey="second">
  <BookList></BookList>
        </Tab.Pane>
      </Tab.Content>
      
      <Tab.Content>
        <Tab.Pane eventKey="third">
       <AddService></AddService>
        </Tab.Pane>
      </Tab.Content>
      <Tab.Content>
        <Tab.Pane eventKey="orderList">
 <OrderList></OrderList>
        </Tab.Pane>
      </Tab.Content>
      <Tab.Content>
        <Tab.Pane eventKey="book">
 <Book></Book>
        </Tab.Pane>
      </Tab.Content>
      
      
    </Col> */}

  </Tab.Container>


);
};

export default Dashboard;