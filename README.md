Demo: https://aqueous-harbor-62198.herokuapp.com/

This is a Rails 5.2 / Webpacker / React app that demonstrates [react-stripe-elements](https://github.com/stripe/react-stripe-elements).

Clone it, and add `stripe_public_key` (your test Stripe public key) to your encrypted credentials file (`bin/rails credentials:edit`).

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

1. [CardElement Form 1](app/javascript/packs/components/MyStoreCheckout.jsx) - resembles the code found in their [README][1], uses `CardElement`
2. [CardElement Form 2](app/javascript/packs/forms/CardForm.jsx) - Also uses `CardElement`, example 1 in [their demo](https://github.com/stripe/react-stripe-elements/blob/master/demo/demo/index.js#L58)
3. [Split Form](app/javascript/packs/forms/SplitForm.jsx) - Uses `CardNumberElement`, `CardExpiryElement`, `CardCVCElement` & `PostalCodeElement` to build a more custom form.
4. [PaymentRequestForm](app/javascript/packs/forms/PaymentRequestForm.jsx) - For it to show up, you need to ensure that [canMakePayment()][2] returns true.
5. [IbanForm](app/javascript/packs/forms/IbanForm.jsx) - Form for gathering [IBAN](https://en.wikipedia.org/wiki/International_Bank_Account_Number) info
5. [IdealBankForm](app/javascript/packs/forms/IdealBankForm.jsx) - some Netherlands bank thing 🤷.  See [here](https://stripe.com/docs/sources/ideal)

[1]: https://github.com/stripe/react-stripe-elements#setting-up-your-payment-form-injectstripe
[2]: https://stripe.com/docs/stripe-js/elements/payment-request-button#create-and-mount-element
