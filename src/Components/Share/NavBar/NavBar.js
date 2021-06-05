
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { UserContext } from '../../../App';
import loginImg from '../../../images/man.png'
import jwt_decode from "jwt-decode";


const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // const [loggedInUser,setSignedInUser]=useState({})
    const handleLogOut = () => {
        sessionStorage.removeItem('token');
        setLoggedInUser({})


    }

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (!token) {
            return false;
        }

        const decodedToken = jwt_decode(token);
        const { name, email, picture } = decodedToken;
        const newSignedInUser = { name: name, email: email, img: picture }
        setLoggedInUser(newSignedInUser)
    }, [])


    return (
        <div>
            <Navbar style={{ backgroundColor: "rgb(0, 156, 134)" }} collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto align-items-center ">
                        <Link className="px-4 mx-3 text-light text-decoration-none" to="/">Home</Link>
                        <Link className="px-4 mx-3 text-light text-decoration-none" to="/dashboard/profile">dashboard</Link>
                        <Link className="px-4 mx-3 text-light text-decoration-none" to="/about">About us</Link>
                        <Link className="px-4 mx-3 text-light text-decoration-none" to="/dashboard/profile">Admin</Link>
                        <Nav.Link className=" text-light text-decoration-none p-0 m-0" >

                            {

                                loggedInUser.email ?
                                    <Popup trigger={
                                        <div className=" mr-5">
                                            <img style={{ width: '40px' }} className="profile-image rounded-circle p-1" src={loggedInUser.img || loginImg} alt="" />
                                        </div>
                                    }
                                        position="bottom">
                                        <div className="bg-white p-3 text-center">

                                            <img style={{ height: '100px', width: '100px' }} className="profile-image rounded-circle p-1 border" src={loggedInUser.img || loginImg} alt="profile-image" />

                                            <p className="text-dark m-0 "><strong>{loggedInUser.name}</strong></p>
                                            <p className="text-dark m-0"><small>{loggedInUser.email}</small></p>

                                            <button onClick={handleLogOut} className="btn btn-outline-danger w-100 mt-4">Log Out?</button>

                                        </div>
                                    </Popup>


                                    : 
                                    <Link className="px-4 mx-3 text-light text-decoration-none"  to="/login">Login</Link>

                                  
                            }

                        </Nav.Link>


                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;