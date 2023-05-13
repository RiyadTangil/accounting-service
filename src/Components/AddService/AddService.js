import React, { useState } from 'react';
import swal from 'sweetalert';

import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import SideVarNav from '../Dashboard/SidvarNav/SideVarNav';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);

    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];

        setFile(newFile);
    }

    const onSubmit = (e) => {
        const loading = toast.loading('Please wait...!');
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
        formData.append('price', info.price);



        fetch('https://accountingservice.vercel.app/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                toast.dismiss(loading);
                if (data) {
                    return swal("service Added", "service has been added successful.", "success");
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

                <div style={{ backgroundColor: "#F4FDFB", marginRight: "20px" }}>
                    <div className="shadow p-5   d-flex justify-content-center flex-column">

                        <h5 className="text-brand">Add a Service</h5>
                        <form onSubmit={onSubmit}>
                            <div class="row g-3">
                                <div class="col">
                                    <label htmlFor="exampleInputEmail1">Service Title</label>
                                    <input type="text" name="name" onBlur={handleBlur} class="form-control" placeholder="First name" aria-label="First name"></input>
                                </div>
                                <div class="col">
                                    <label htmlFor="exampleInputEmail1">Service img</label>
                                    <input type="file" name="img" onChange={handleFileChange} class="form-control" placeholder="Last name" aria-label="Last name"></input>
                                </div>
                            </div>
                            <div class="row mt-4 g-3">
                                <div class="col form-group">
                                    <label htmlFor="exampleInputEmail1">Service description</label>
                                    <input type="text" name="description" onBlur={handleBlur} class="form-control" placeholder="Service details" aria-label="First name"></input>
                                </div>
                                <div class="col">
                                    <label htmlFor="exampleInputEmail1">Service Price</label>
                                    <input type="number" onBlur={handleBlur} name="price" class="form-control" placeholder="Last name" aria-label="Last name"></input>
                                </div>

                            </div>
                            <div class="col-12 d-flex justify-content-end mt-2">
                                < button type="submit" data-bs-target="#staticBackdrop" className="btn main-bg">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>


    );
};

export default AddService;