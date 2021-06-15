import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const OrderListTable = ({ order, updateOrderStatus }) => {






    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary " scope="col">Name</th>
                        <th className="text-secondary " scope="col">Email</th>
                        <th className="text-secondary" scope="col">ServiceName</th>

                        <th className="text-secondary" scope="col">Pay with</th>
                        <th className="text-secondary" scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map((order, index) =>

                            <tr>
                                <td>{index + 1}</td>
                                <td className="">{order.name}</td>
                                <td className=" ">{order.email}</td>
                                <td>{order.serviceName}</td>

                                <td>Credit cart</td>
                                <td>
                                    <select
                                        className={order.status === "Pending" ? "btn btn-danger" : order.status === "Done" ? "btn btn-success" : "btn btn-info"}
                                        defaultValue={order.status}
                                        onChange={e => updateOrderStatus(e.target.value, order._id)}>
                                        <option className="bg-white text-muted">Pending</option>
                                        <option className="bg-white text-muted">On going</option>
                                        <option className="bg-white text-muted">Done</option>
                                    </select>
                                </td>
                                {/* <td  >
                                    <div class="btn-group">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            {order.status}
                                        </button>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li onClick={() => updateOrderStatus('Pending', order._id)} ><a class="dropdown-item" href="#">Pending</a></li>
                                            <li onClick={() => updateOrderStatus('OnGoing', order._id)}><a class="dropdown-item" href="#">OnGoing</a></li>
                                            <li onClick={() => updateOrderStatus('Done', order._id)}><a class="dropdown-item" href="#">Done </a></li>
                                        </ul>
                                    </div>

                                </td> */}

                            </tr>
                        )
                    }
                </tbody>
            </table>


        </div>
    );
};

export default OrderListTable;