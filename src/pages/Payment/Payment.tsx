import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm/PaymentForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51PgVjtEIEihN5bYygVXmwOtWYdhNbSIElgNmnfM46Vd7DXDBbV4Zgvw3fPOja2wZnZbKO2WMr59yH6NDaAE9Uhqj00rU4p8P0J');
    // const options = {
    //     // passing the client secret obtained from the server
    //     clientSecret: "sk_test_51PgVjtEIEihN5bYycpG8YTN1u2dhVVMXmqzxGYiIYw2KOUNOPlWHAt2YuxPN9ytiOfagfhvFjMEfz2lXvJHDm3E100cK9XcwQY",
    // };

    return (
        // <Elements stripe={stripePromise} options={options}>
        <Elements stripe={stripePromise} >
            <PaymentForm />
        </Elements>
    )
}

export default Payment