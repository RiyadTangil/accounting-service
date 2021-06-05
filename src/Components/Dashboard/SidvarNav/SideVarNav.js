
import React, { useContext, useEffect, useState } from 'react';
import { Col, Nav, Tab } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SideVarNav = () => {


  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch('https://morning-thicket-61908.herokuapp.com/isAdmin', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email: loggedInUser.email })
      })
          .then(res => res.json())
          .then(data => {
              setLoading(false)
              setIsAdmin(data)
          }
          )
  }, [])



  return (

    <Tab.Container id="left-tabs-example" defaultActiveKey="first">

      <Col >
        <Nav variant="pills" className="flex-column nav-container ">
          <Nav.Item>
            <Link      to="/dashboard/Profile">Profile</Link>
          </Nav.Item>
          <Nav.Item>
            <Link      to="/dashboard/Book">Book</Link>
          </Nav.Item>
          <Nav.Item>
            <Link      to="/dashboard/Review">Review</Link>
          </Nav.Item>
          <Nav.Item>
            <Link      to="/dashboard/BookList">Book list</Link>
          </Nav.Item>
          {isAdmin && <div>
          <Nav.Item>
            <Link      to="/dashboard/addService">Add Service</Link>
          </Nav.Item>
          <Nav.Item>
            <Link      to="/dashboard/MakeAdmin">make admin</Link>
          </Nav.Item>
           <Nav.Item>
            <Link      to="/dashboard/OrderList">Order List</Link>
          </Nav.Item>
          </div>
}
        
         

          <Nav.Item>
            <Link      to="/">Home page</Link>
          </Nav.Item>
        </Nav>
      </Col>

    </Tab.Container>
  );
};

export default SideVarNav;