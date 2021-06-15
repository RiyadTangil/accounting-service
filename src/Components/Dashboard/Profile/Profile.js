import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import man from "../../../images/man.png"
import SideVarNav from '../SidvarNav/SideVarNav';
import './profile.css'

const Profile = () => {
    const[loggedInUser, setLoggedInUser]= useContext(UserContext)
    return (
        <div className="row">

            <SideVarNav></SideVarNav>
            <div className="col-md-9">
                <div className=" p-4 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                    <div className="d-flex justify-content-center ">
                        <div className=" row   mt-5 pt-5">
                            <div className="col-md-6 col-sm-12">
                                <div class="card text-center ">
                                    <h1 class="text-muted bg-light">Profile</h1>
                                    <div style={{borderRadius:"50%"}} class="text-center ">
                                        <img style={{ width: "150px" ,borderRadius:"50%"}} src={loggedInUser.img ||man} class="   card-img-top" alt="..."></img>
                                    </div>
                                    <div class="card-body ">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Profile;