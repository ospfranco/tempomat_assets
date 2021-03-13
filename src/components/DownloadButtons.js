import React from "react";
import appleWhite from "../images/AppleWhite.svg";
// import github from "../images/github.svg";
// import heart from "../images/heart.svg";


export const DownloadButton = () => {
  let triggerCheckout = async () => {
    try {
      // eslint-disable-next-line
      let stripe = Stripe('pk_live_51IUTBjCi8E82ehC3zFfESDZxzWdbP5tLvwRcvrz2FMo1wYWuuUDey2J4exiVeCLywj2d9cJxluQ20EiXeas4ElGL00j7CD7E65');
      // let stripe = Stripe('pk_test_51IUTBjCi8E82ehC3QAYy4CBlqVb4xm1oxSgbBRNMbeNo8q8pndNNfdb7anJ7sHIB7NczmkplxCT2HIXj86kZ2m0100De8shnaQ');

      let res = await fetch('/.netlify/functions/checkout', {
        method: 'POST'
      });
      let json = await res.json();
      return stripe.redirectToCheckout({sessionId: json.id});
    } catch(e) {
      alert('Oops something went wrong, please try again.');
    }
  }

  return (
    <div className="flex flex-col md:flex-row self-center my-12">
      <button
        onClick={triggerCheckout}
        className="bg-blue-500 text-white font-bold py-2 px-8 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-700 hover:border-blue rounded w-64 flex items-center justify-center"
      >
        <img src={appleWhite} className="h-5 mr-3" alt="apple icon" /> Buy
      </button>
    </div>
  )
}