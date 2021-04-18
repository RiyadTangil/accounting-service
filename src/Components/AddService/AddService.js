import React, { useState } from 'react';
import SideBar from '../Dashboard/SideBar/SIdeBar';
import { useForm } from "react-hook-form";
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

    const onSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
        formData.append('price', info.price);
        console.log("formData",formData);


        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <section>
            <div style={containerStyle} className=" container-fluid row">
                <div className="col-md-2 col-sm-6 col-12">

                    <SideBar></SideBar>
                </div>

                <div className="col-md-10 col-sm-12 col-12">
                    <div className="p-5">
                        <h5 className="text-brand">Add a Service</h5>
                        {/* <form onSubmit={handleSubmit}> */}
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                           < button type="submit" className="btn btn-primary">Submit</button>
                           </div>
                        </form>
                    </div>
                   
                </div>
            </div>
        </section>
    );
};

export default AddService;