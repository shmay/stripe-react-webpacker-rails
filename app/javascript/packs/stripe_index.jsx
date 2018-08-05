// index.js
import React from 'react';
import {render} from 'react-dom';
import {StripeProvider} from 'react-stripe-elements';

import CheckoutDemos from './components/CheckoutDemos.jsx';

const App = () => {
  return (
    <div>
      <StripeProvider apiKey={window.stripe_key}>
        <CheckoutDemos />
      </StripeProvider>
    </div>
  );
};

render(<App />, document.getElementById('root'));
