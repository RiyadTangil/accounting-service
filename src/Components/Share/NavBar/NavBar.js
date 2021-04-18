
import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const NavBar = () => {
    const [loggedInUser, seLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav  className="ms-auto">
                        <Link  className="px-4 text-light text-decoration-none" to="/home">Home</Link>
                        <Link className="px-4 text-light text-decoration-none" to="/dashboard">dashboard</Link>
                        <Link className="px-4 text-light text-decoration-none" to="/about">About us</Link>
                        <Link className="px-4 text-light text-decoration-none" to="/makeAdmin">Admin</Link>
                    </Nav>
                    <Form style={{ marginRight: "70px" }} inline>
                        {
                            loggedInUser.email ?
                               
                                <div class="btn-group ">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                               user
                                </button>
                                <ul class="dropdown-menu p-2">
                                <p><strong> name:</strong>  {loggedInUser.name}</p>
                               <p><strong> Email:</strong>  {loggedInUser.email}</p>
                                </ul>
                              </div>



                                :

                                <Link to="/login"><Button variant="outline-info">login</Button></Link>

                        }

                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;