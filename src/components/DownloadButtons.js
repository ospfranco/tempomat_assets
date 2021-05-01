import React from "react";
import appleWhite from "../images/AppleWhite.svg";

export const DownloadButton = () => {
  // let triggerCheckout = async () => {
  //   try {
  //     // eslint-disable-next-line
  //     let stripe = Stripe('pk_live_51IUTBjCi8E82ehC3zFfESDZxzWdbP5tLvwRcvrz2FMo1wYWuuUDey2J4exiVeCLywj2d9cJxluQ20EiXeas4ElGL00j7CD7E65');
  //     // let stripe = Stripe('pk_test_51IUTBjCi8E82ehC3QAYy4CBlqVb4xm1oxSgbBRNMbeNo8q8pndNNfdb7anJ7sHIB7NczmkplxCT2HIXj86kZ2m0100De8shnaQ');

  //     let res = await fetch('/.netlify/functions/checkout', {
  //       method: 'POST'
  //     });
  //     let json = await res.json();
  //     return stripe.redirectToCheckout({sessionId: json.id});
  //   } catch(e) {
  //     alert('Oops something went wrong, please try again.');
  //   }
  // }

  return (
    <div className="flex flex-col md:flex-row mt-2 mb-12">
      <href
        a="https://apps.apple.com/de/app/ci-demon/id1560355863?mt=12"
        // onClick={triggerCheckout}
        className="bg-black text-white font-bold py-2 px-8 rounded w-64 flex items-center justify-center"
      >
        <img src={appleWhite} className="h-5 mr-3" alt="apple icon" /> Buy
      </href>
    </div>
  )
}