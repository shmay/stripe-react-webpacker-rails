// index.js
import React from 'react';
import {render} from 'react-dom';
import {StripeProvider} from 'react-stripe-elements';

import FormDemos from './components/FormDemos.jsx';

const App = () => {
  return (
    <div>
      <StripeProvider apiKey={window.stripe_key}>
        <FormDemos />
      </StripeProvider>
    </div>
  );
};

render(<App />, document.getElementById('root'));
