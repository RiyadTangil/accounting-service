import React, { useContext } from 'react';
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { useState } from 'react';
import { UserContext } from '../../App';


const SimpleCardForm = ({ order}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const stripe = useStripe();
  const elements = useElements();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleOrder = async data => {



    if (!stripe || !elements) {
      console.log("clicked first");

      return;
    }
    const loading = toast.loading('Please wait...!');


    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });

    if (error) {
      toast.dismiss(loading);

      return swal("Failed!", error.message, "error", { dangerMode: true });
      setPaymentError(error.message);
      setPaymentSuccess(null);
      console.log(true);

      
    }
   

console.log(loggedInUser,paymentMethod.id);
    const orderInfo = {
      ...loggedInUser,
      orderTime: new Date().toLocaleString(),
      "serviceName": order.name,
      "price": order.price,
      "description": order.description,
      "image": order.image,
      "status": "pending",
      "paymentId": paymentMethod.id
    }
    axios.post("https://morning-thicket-61908.herokuapp.com/addOrder", orderInfo)
      .then(res => {
        toast.dismiss(loading);
        if (res.data) {
          return swal("Payment successful", "Your booking and payment has been successful.", "success");
        }
        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
      })
      .catch(error => {
        toast.dismiss(loading);
        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleOrder)} class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Service</label>
          <input type="text" defaultValue={order.name} class="form-control" id=""></input>
        </div>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Price</label>
          <input type="text" defaultValue={order.price} class="form-control" id=""></input>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Name</label>
          <input type="text" defaultValue={loggedInUser.name} class="form-control" id=""></input>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Card Number</label>
          <CardNumberElement className="form-control" />

        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="text" defaultValue={loggedInUser.email} class="form-control" id=""></input>
        </div>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label"> Expiration Date</label>
          <CardExpiryElement className="form-control" />


        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Address</label>
          <input type="text" class="form-control" placeholder="Address" id=""></input>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">CVC</label>
          <CardCvcElement className="form-control" />


        </div>

        <div class="pb-5 text-center ">
          <button class="btn main-bg me-md-2 text-center" type="submit" disabled={!stripe}>
        Order now
            </button>
        </div>
      </form>


      {
        paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
      }
      {
        paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful.</p>
      }
    </div>
  );
};

export default SimpleCardForm;