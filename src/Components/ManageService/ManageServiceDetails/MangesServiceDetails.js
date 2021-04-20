import React, { useState } from 'react';

const MangesServiceDetails = ({ service }) => {

    const handleDelete = (event, id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    event.target.parentNode.parentNode.style.display = 'none';
                }
            })

    }

    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">ServiceName</th>
                        <th className="text-secondary" scope="col">description</th>
                        <th className="text-secondary" scope="col">price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        service.map((service, index) =>

                            <tr>
                                <td>{index + 1}</td>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                                <td>{service.price}</td>

                                <td onClick={(e) => handleDelete(e, service._id)} >

                                    <button class="btn btn-warning" type="button" >
                                        delete
                                        </button>
                                </td>

                            </tr>
                        )
                    }

                </tbody>
            </table>



        </div>
    );
};

export default MangesServiceDetails;