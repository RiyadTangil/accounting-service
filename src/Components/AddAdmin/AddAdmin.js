import React, { useState } from 'react';
import SideBar from '../Dashboard/SideBar/SIdeBar';

const AddAdmin = () => {
    const [admin ,setAdmin]=useState(null)
    const handleAdmin=()=>{
        fetch("http://localhost:5000/addAdmin", {
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
        <div className="container-fluid row" >
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                <form onSubmit={handleAdmin} className="w-50 p-5  shadow">
                 
                
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
    );
};

export default AddAdmin;