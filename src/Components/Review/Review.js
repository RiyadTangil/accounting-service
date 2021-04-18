import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import SideBar from '../Dashboard/SideBar/SIdeBar';

const Review = () => {
    const [review, setReview] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log("img",loggedInUser);

    const handleBlur = e => {
        const rewReview = { ...review, img: loggedInUser.img };
        rewReview[e.target.name] = e.target.value;
        setReview(rewReview);

        console.log("loogged in user", rewReview);
    }

    console.log("review", review);
    const handleReview = () => {
        fetch('https://morning-thicket-61908.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })


    }


    return (
        <div className="container-fluid row" >
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                {/* <form onSubmit={handleOrder} className="w-50 p-5  shadow"> */}
                <form onSubmit={handleReview} className="w-50 p-5  shadow">
                    <div class="row mb-3">

                        <div class="col-sm-10">
                            <input type="text" onBlur={handleBlur} placeholder='your name' name='name' class="form-control" id=""></input>
                        </div>
                    </div>
                    <div class="row mb-3">

                        <div class="col-sm-10">
                            <input type="text" name="designation" onBlur={handleBlur} placeholder="Company's name designation" class="form-control" id="inputEmail3"></input>
                        </div>
                    </div>
                    <div class="row mb-3">

                        <div class="col-sm-10">

                            <input type="text-aria" name='description' onBlur={handleBlur} name='description' placeholder='description' class="form-control" id=""></input>
                        </div>
                    </div>



                    <div className="d-flex justify-content-between ">

                        <button type="submit" class="btn btn-primary">Send review</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Review;