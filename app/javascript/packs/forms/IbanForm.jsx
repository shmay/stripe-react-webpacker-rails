import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import {IbanElement} from 'react-stripe-elements';

import {handleBlur, handleChange, handleClick, handleFocus, handleReady, createOptions} from './../util.js';;

class IbanForm extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createSource({
          type: 'sepa_debit',
          currency: 'eur',
          owner: {
            name: ev.target.name.value,
            email: ev.target.email.value,
          },
          mandate: {
            notification_method: 'email',
          },
        })
        .then((payload) => console.log('[source]', payload));
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };
  render() {
    return (
      <div>
        <h5>IBAN form:</h5>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input name="name" type="text" placeholder="Jane Doe" required />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="jane.doe@example.com"
              required
            />
          </label>
          <label>
            IBAN
            <IbanElement
              supportedCountries={['SEPA']}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <button>Pay</button>
        </form>
      </div>
    );
  }
}
export default injectStripe(IbanForm);
