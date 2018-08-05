import React from 'react';
import MyStoreCheckout from './MyStoreCheckout.jsx';

import CardForm from './../forms/CardForm.jsx';
import SplitForm from './../forms/SplitForm.jsx';
import PaymentRequestForm from './../forms/PaymentRequestForm.jsx';
import IbanForm from './../forms/IbanForm.jsx';
import IdealBankForm from './../forms/IdealBankForm.jsx';

import {Elements} from 'react-stripe-elements';

class CheckoutDemos extends React.Component {
  constructor() {
    super();

    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
    };

    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState({elementFontSize: '14px'});
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== '18px'
      ) {
        this.setState({elementFontSize: '18px'});
      }
    });
  }

  render() {
    const {elementFontSize} = this.state;
    return (
      <div className="Checkout">
        <h1>Available Elements</h1>
        <MyStoreCheckout />
        <Elements>
          <CardForm fontSize={elementFontSize} />
        </Elements>
        <Elements>
          <SplitForm fontSize={elementFontSize} />
        </Elements>
        <Elements>
          <PaymentRequestForm />
        </Elements>
        <Elements>
          <IbanForm fontSize={elementFontSize} />
        </Elements>
        <Elements>
          <IdealBankForm fontSize={elementFontSize} />
        </Elements>
      </div>
    );
  }
}

export default CheckoutDemos;
