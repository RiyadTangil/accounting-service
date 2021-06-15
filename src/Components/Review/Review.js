import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import swal from 'sweetalert';
import toast from 'react-hot-toast';
import SideVarNav from '../Dashboard/SidvarNav/SideVarNav';

const Review = () => {
    const [review, setReview] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const handleBlur = e => {
        const rewReview = { ...review, img: loggedInUser.img };
        rewReview[e.target.name] = e.target.value;
        setReview(rewReview);

    }


    const handleReview = (e) => {
        e.preventDefault();
        const loading = toast.loading('Please wait...!');
        fetch('https://morning-thicket-61908.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(data => {
                toast.dismiss(loading);
                if (data) {
                    return swal("Review Added", "Review has been added successful.", "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })


    }


    return (
        <div className="row">
            <SideVarNav></SideVarNav>
            <div className="col-md-9 mt-5">

                <div >
                    <div className=" d-flex justify-content-center     align-items-center  ">

                        <form style={{ backgroundColor: "#F4FDFB" }} onSubmit={handleReview} className=" w-75 p-5  shadow">
                            <div class="row mb-4">

                                <div class="col-sm-10">
                                    <input type="text" onBlur={handleBlur} placeholder='your name' name='name' class="form-control" id=""></input>
                                </div>
                            </div>
                            <div class="row mb-4">

                                <div class="col-sm-10">
                                    <input type="text" name="designation" onBlur={handleBlur} placeholder="Company's name designation" class="form-control" id="inputEmail3"></input>
                                </div>
                            </div>
                            <div class="row mb-4">

                                <div class="col-sm-10">

                                    <input type="text-aria" name='description' onBlur={handleBlur} name='description' placeholder='description' class="form-control" id=""></input>
                                </div>
                            </div>



                            <div className="d-flex justify-content-between ">

                                <button type="submit" class="btn main-bg">Send review</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;