import React, { useEffect } from 'react';

const PayPalButton = ({ amount, onSuccess, onError }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID';
    script.addEventListener('load', () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,
              },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            onSuccess(details);
          });
        },
        onError: (err) => {
          onError(err);
        },
      }).render('#paypal-button-container');
    });
    document.body.appendChild(script);
  }, [amount, onSuccess, onError]);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;