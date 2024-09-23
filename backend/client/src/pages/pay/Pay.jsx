import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
//dd
const stripePromise = loadStripe(
  "pk_test_51Q17s8LANqsQFU8YtmMp9hJOiYif6FWuiMLK6m2yUQAV1mzxWtULpFzT3SI3h8V1PyJmwU8tvZvHKmlZDtAK99Hx00AfwZNTjY"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="pay">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <div className="payment-container">
            <h2>Enter your card information</h2>
            <CheckoutForm />
          </div>
        </Elements>
      )}
    </div>
  );
};

export default Pay;