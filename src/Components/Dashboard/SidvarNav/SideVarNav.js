import React, { useContext, useEffect, useState } from "react";
import { Col, Nav, Tab } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faPlusCircle,
  faHome,
  faBars,
  faTasks,
  faUserCircle,
  faShoppingBag,
  faShoppingCart,
  faUserPlus,
  faUsers,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const SideVarNav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(loggedInUser.email, "loggedInUser.email");
    fetch("https://accountingservice.vercel.app/admin")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        const isExist = data.find((item) => item.email === loggedInUser.email);

        if (isExist) setIsAdmin(true);
      });

    // fetch("https://accountingservice.vercel.app/isAdmin", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ email: loggedInUser.email || "" }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setLoading(false);
    //     setIsAdmin(data);
    //   });
  }, [loggedInUser.email]);

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Col>
        <Nav variant="pills" className="flex-column nav-container ">
          <Nav.Item>
            <Link to="/dashboard/Profile">
              {" "}
              <FontAwesomeIcon icon={faUserCircle} /> Profile
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/dashboard/Book">
              <FontAwesomeIcon icon={faShoppingBag} /> Book
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/dashboard/Review">
              <FontAwesomeIcon icon={faSearchDollar} /> Review
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/dashboard/BookList">
              <FontAwesomeIcon icon={faShoppingCart} /> Book list
            </Link>
          </Nav.Item>
          {isAdmin && (
            <div>
              <Nav.Item>
                <Link to="/dashboard/addService">
                  <FontAwesomeIcon icon={faPlusCircle} /> Add Service
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/dashboard/MakeAdmin">
                  <FontAwesomeIcon icon={faPlusCircle} /> make admin
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/dashboard/OrderList">
                  <FontAwesomeIcon icon={faBars} /> Order List
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/dashboard/manageService">
                  <FontAwesomeIcon icon={faTasks} /> Manage Services
                </Link>
              </Nav.Item>
            </div>
          )}

          <Nav.Item>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home page
            </Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Tab.Container>
  );
};

export default SideVarNav;
