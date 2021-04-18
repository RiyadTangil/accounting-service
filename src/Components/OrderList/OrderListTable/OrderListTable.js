import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const OrderListTable = ({ order }) => {

    const { register, handleSubmit, watch, errors } = useForm();

    const [show, setShow] = useState(false)
    const [productKey, setProductKey] = useState([])

    const handleUpdate = (id) => {
        console.log(id);
        setProductKey(id);

    }


    const onSubmit = (status) => {

        let eventData = {
            id: productKey,
            status: status
        };
        console.log("eventy",eventData);



        fetch(`https://morning-thicket-61908.herokuapp.com/update/${productKey}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {

                    console.log({ result });

                }
            })
        setShow(false)
    }

    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">ServiceName</th>

                        <th className="text-secondary" scope="col">Pay with</th>
                        <th className="text-secondary" scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map((order, index) =>

                            <tr>
                                {/* <td>{index + 1}</td> */}
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.serviceName}</td>

                                <td>Credit cart</td>
                                <td onClick={() => handleUpdate(order._id)} >
                                    <div class="btn-group">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            {order.status}
                                        </button>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li onClick={() => onSubmit('Pending')} ><a class="dropdown-item" href="#">Pending</a></li>
                                            <li onClick={() => onSubmit('OnGoing')}><a class="dropdown-item" href="#">OnGoing</a></li>
                                            <li onClick={() => onSubmit('Done')}><a class="dropdown-item" href="#">Done </a></li>
                                        </ul>
                                    </div>

                                </td>

                            </tr>
                        )
                    }
                </tbody>
            </table>


            {/* <div class="btn-group">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                       </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                </div> */}

        </div>
    );
};

export default OrderListTable;