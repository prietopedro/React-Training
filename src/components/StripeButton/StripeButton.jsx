import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default function StripeButton({price}) {
    const priceForStripe = price * 100;
    const publisableKey = "pk_test_u4NVUstzDyMvMqWTvtXWo2t400SOlXjGYy"
    const onToken = token => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
        label="Pay Now"
        name="CRWN CLothing Ltd."
        billingAddress
        shippingAddressimage='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publisableKey}
        >
            
        </StripeCheckout>
    )
}