import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51PgVjtEIEihN5bYygVXmwOtWYdhNbSIElgNmnfM46Vd7DXDBbV4Zgvw3fPOja2wZnZbKO2WMr59yH6NDaAE9Uhqj00rU4p8P0J");

const Checkout: React.FC = () => {
    const handleCheckout = async () => {
        try {
            const { data } = await axios.post("https://localhost:7095/api/HotelPayment/create-checkout-session");
            if (data.sessionId) {
                const stripe = await stripePromise;
                stripe?.redirectToCheckout({ sessionId: data.sessionId });
            }
        } catch (error) {
            console.error("Error during checkout:", error);
        }
    };

    return (
        <div>
            <h1 className="text-red-500">Thanh toán</h1>
            <button onClick={handleCheckout}>Thanh toán ngay</button>
        </div>
    );
};

export default Checkout;