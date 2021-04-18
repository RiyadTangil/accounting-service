import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Dashboard/SideBar/SIdeBar';
import BookListDetails from '../BookListDetails/BookListDetails';

const BookList = () => {
    const [bookingList, setBookingList] = useState([])
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        border: '1px solid red'
    }

    useEffect(() => {
        fetch("https://morning-thicket-61908.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => {
                const myOrder = data.filter(orders => orders.email === loggedInUser.email)
               console.log("my orders",myOrder);
               setBookingList(myOrder)
            } )
    }, [])


    return (
        <div style={containerStyle} className=" row" >
            <SideBar></SideBar>
            <div className="col-md-10 col-sm-6  col-12 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>


                <div className="d-flex justify-content-center ">
                    <div className="w-75 row  shadow mt-5 pt-5">
                        {
                            bookingList.map(booking => <BookListDetails booking={booking}></BookListDetails>)
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BookList;