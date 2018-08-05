import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import {CardElement} from 'react-stripe-elements';

import {handleBlur, handleChange, handleClick, handleFocus, handleReady, createOptions} from './../util.js';;

class CardForm extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then((payload) => console.log('[token]', payload));
    } else {
      console.log('Form submitted before Stripe.js loaded.');
    }
  };

  render() {
    return (
      <div>
        <h5>Card Form 2:</h5>
        <form onSubmit={this.handleSubmit}>
          <label>Card details</label>
          {this.props.stripe ? (
            <CardElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          ) : (
            <div className="StripeElement loading" />
          )}
          <button disabled={!this.props.stripe}>Pay</button>
        </form>
      </div>
    );
  }
}

export default injectStripe(CardForm);
