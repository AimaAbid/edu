// src/components/PayPalLink.js

import React from 'react';
import './PayPalLink.css'

const PayPalLink = () => {
  // Replace these variables with your actual values
  const paypalEmail = 'aimaabidsheikh@gmail.com';
  const itemName = 'Course';
  const amount = '10.00'; // Amount in USD
  const currencyCode = 'USD';
  const returnUrl = 'http://localhost:3000/success'; // Your success page
  const cancelUrl = 'http://localhost:3000/cancel'; // Your cancel page

  // Construct the PayPal URL
  const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${paypalEmail}&item_name=${itemName}&amount=${amount}&currency_code=${currencyCode}&return=${returnUrl}&cancel_return=${cancelUrl}`;

  return (
    <div className="paypal-link">
      <a href={paypalUrl} target="_blank" rel="noopener noreferrer">
        Pay 
      </a>
    </div>
  );
};

export default PayPalLink;
