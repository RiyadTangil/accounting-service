import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


const PaymentProcess = ({handlePayment}) => {

   
    return (
        
        <div className="container">
         
            <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
            </Elements>
        </div>
    );
};

export default PaymentProcess;