import React, { useState } from 'react';
import SideBar from '../Dashboard/SideBar/SIdeBar';
import SideVarNav from '../Dashboard/SidvarNav/SideVarNav';

const AddAdmin = () => {
    const [admin ,setAdmin]=useState(null)
    const handleAdmin=()=>{
        fetch("https://morning-thicket-61908.herokuapp.com/addAdmin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify({"email":admin})
        })
            .then(res => res.json())
            .then(data => console.log(data))


    }

    return (
        <div className="row">
        <SideVarNav></SideVarNav>
        <div className="col-md-9 mt-5">

            <div>
               


                <form   style={{ backgroundColor: "#F4FDFB" }} onSubmit={handleAdmin} className="w-75 p-5  shadow">
                 
                
                    <div class="row mb-3">
                        <label for="inputEmail3" name="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email"name="email" onBlur={(e)=>setAdmin(e.target.value)}  class="form-control" id="inputEmail3"></input>
                        </div>
                    </div>
                      
                        <button type="submit" class="btn btn-primary">Submit</button>
                    
                </form>


   
            </div>
            </div>
        </div>
    );
};

export default AddAdmin;