import React from 'react';

const BookListDetails = ({ booking }) => {
    console.log(" booking.image", booking.image);

    return (
        <div className="col-md-6 col-sm-12">

            <div className=" text-center shadow p-4">

                <div className="d-flex justify-content-between">
                {
            booking.image ? <img style={{height: '50px'}}
             src={`data:image/png;base64,${booking.image.img}`}/>
            :
            <img style={{height: '50px'}} className="img-fluid mb-3" 
            src={`https://morning-thicket-61908.herokuapp.com/${booking.img}`} alt=""/>
        }
                   
                 <p className="text-light p-2 rounded-3" style={{'backgroundColor': booking.status === 'Done' ? 'green' : booking.status === 'pending' ? 'red' : 'yellow'}}>{booking.status}</p>
                </div>
                <h5 className="my-2 ">{booking.name}</h5>
                <h6 className="my-2">{booking.serviceName}</h6>

                <p className="text-secondary">{booking.description}</p>


            </div>


        </div>
    );
};

export default BookListDetails;