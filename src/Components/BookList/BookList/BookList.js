import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import SideBar from '../../Dashboard/SideBar/SIdeBar';
import SideVarNav from '../../Dashboard/SidvarNav/SideVarNav';
import BookListDetails from '../BookListDetails/BookListDetails';

const BookList = () => {
    const [bookingList, setBookingList] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const containerStyle = {
        backgroundColor: "#F4FDFB",

    }
    console.log("bookingList user", bookingList.length);


    useEffect(() => {
        fetch("https://morning-thicket-61908.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => {
                console.log("my orders email", loggedInUser);
                const myOrder = data.filter(orders => orders.email === loggedInUser.email)
                console.log("my orders", myOrder);
                console.log("my orders after fetching", data);

                setBookingList(myOrder)
            })
    }, [])


    return (




        <div className="row">

          <SideVarNav></SideVarNav>
            <div className="col-md-9">
                <div className=" p-4 pr-5" style={{ backgroundColor: "#F4FDFB" }}>


                    <div className="d-flex justify-content-center ">
                        <div className=" row   mt-5 pt-5">
                            {
                                bookingList.map(booking => <BookListDetails booking={booking}></BookListDetails>)
                            }
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
    );
};

export default BookList;