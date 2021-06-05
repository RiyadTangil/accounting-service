import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import "./SideBar.css"
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import SidebarLoading from './SidebarLoader';
const SIdeBar = () => {
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
        // <div className="sidebar  d-flex flex-column position-sticky justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>

            <nav id="sidebar">
                <ul className="list-unstyled ">
                    <li>
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white">
                            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                        </Link>
                    </li>
                    <div>

                        <li>
                            <Link to="/dashboard/book" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Book</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/bookList" className="text-white">
                                <FontAwesomeIcon icon={faUsers} /> <span>Book list</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/review" className="text-white">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Review</span>
                            </Link>
                        </li>
                        {isAdmin && <div>
                            <li>
                                <Link to="/dashboard/orderList" className="text-white">
                                    <FontAwesomeIcon icon={faUsers} /> <span>Order List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/addService" className="text-white" >
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/makeAdmin" className="text-white" >
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manageService" className="text-white" >
                                    <FontAwesomeIcon icon={faCog} /> <span>manage Services</span>
                                </Link>
                            </li>
                        </div>}
                    </div>
                </ul>

                <div>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>
            </nav>
        // </div>
    );
};

export default SIdeBar;