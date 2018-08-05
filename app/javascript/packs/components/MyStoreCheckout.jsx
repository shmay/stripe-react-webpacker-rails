// MyStoreCheckout.js
import React from 'react';
import {Elements} from 'react-stripe-elements';

import InjectedCheckoutForm from '../forms/CheckoutForm.jsx';

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <div>
        <h5>Card Form 1:</h5>
        <Elements>
          <InjectedCheckoutForm />
        </Elements>
      </div>
    );
  }
}

export default MyStoreCheckout;
