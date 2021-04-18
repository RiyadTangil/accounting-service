import React from 'react';
import SIdeBar from '../SideBar/SIdeBar';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const Dashboard = () => {
    return (
        <section>
            <div className="row">
              
                   
               <SIdeBar></SIdeBar>
          
            
                <div  className="col-md-10 col-sm-12 col-12">
                 <h1>dashboard</h1>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;