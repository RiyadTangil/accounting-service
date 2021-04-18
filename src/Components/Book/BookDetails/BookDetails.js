import React, { useContext } from 'react';
import { UserContext } from '../../App';
import SideBar from '../../Dashboard/SideBar/SIdeBar';


const BookDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <div className="container-fluid row" >
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                <form className="w-50 p-5  shadow">
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">your name</label>
                        <div class="col-sm-10">
                            <input type="text" defaultValue={loggedInUser.name} class="form-control" id=""></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" defaultValue={loggedInUser.email}  class="form-control" id="inputEmail3"></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">your service</label>
                        <div class="col-sm-10">
                            <input type="text"  class="form-control" id=""></input>
                        </div>
                    </div>

                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
                                <label class="form-check-label" for="gridRadios1">
                                    First radio
                                      </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                                <label class="form-check-label" for="gridRadios2">
                                    Second radio
                                    </label>
                            </div>
                            <div class="form-check disabled">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled></input>
                                <label class="form-check-label" for="gridRadios3">
                                    Third disabled radio
                                     </label>
                            </div>
                        </div>
                    </fieldset>
                    <div class="row mb-3">
                        <div class="col-sm-10 offset-sm-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1"></input>
                                <label class="form-check-label" for="gridCheck1">
                                    Example checkbox
                                    </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>


            </div>
        </div>
    );
};

export default BookDetails;