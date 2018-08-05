This is a Rails / Webpacker / React app that demonstrates [react-stripe-elements](https://github.com/stripe/react-stripe-elements).

Clone it, and add `stripe_public_key` (your test Stripe public key) to your encrypted credentials file (`bin/rails credentials:edit`.

The app is kicked off in [stripe_index.jsx](app/javascript/packs/stripe_index.jsx):

``` javascript
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
```

The forms displayed on the page can be seen in [app/javascript/packs/forms/](app/javascript/packs/forms)

They are:

1. [Card Form 1](app/javascript/packs/components/MyStoreCheckout.jsx) - resembles the code found in their [README][1], uses `CardElement`
2. Card Form 2 - Also uses `CardElement`, example 1 in [their demo](https://github.com/stripe/react-stripe-elements/blob/master/demo/demo/index.js#L58)
3. Split Form - Uses `CardNumberElement`, `CardExpiryElement`, `CardCVCElement`, & `PostalCodeElement`
4. PaymentRequestForm - For it to show up, you need to ensure that [canMakePayment()][2] returns true.
5. IbanForm - Form for gathering [IBAN](https://en.wikipedia.org/wiki/International_Bank_Account_Number) info
5. IdealBankForm - some Netherlands bank thing 🤷.  See [here](https://stripe.com/docs/sources/ideal)

[1]: https://github.com/stripe/react-stripe-elements#setting-up-your-payment-form-injectstripe
[2]: https://stripe.com/docs/stripe-js/elements/payment-request-button#create-and-mount-element
