// lambda function
// available under: /.netlify/functions/checkout
let Stripe = require('stripe')

let __DEV__ = process.env.NETLIFY_DEV
let stripeKey = __DEV__ ? process.env.STRIPE_DEV_KEY : process.env.STRIPE_KEY;
let stripe = Stripe(stripeKey);

// event object
// {
//   "path": "Path parameter",
//   "httpMethod": "Incoming request’s method name"
//   "headers": {Incoming request headers}
//   "queryStringParameters": {query string parameters }
//   "body": "A JSON string of the request payload."
//   "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }
exports.handler = async function(event, context) {
  const success_url = __DEV__ ? 'http://localhost:8888/purchaseOk?session_id={CHECKOUT_SESSION_ID}' : 'https://tempomat.dev/purchaseOk?session_id={CHECKOUT_SESSION_ID}';
  let session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Tempomat License'
          },
          unit_amount: 1000
        },
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url,
    cancel_url: 'https://tempomat.dev/purchase_fail'
  });


  return {
    statusCode: 200,
    body: JSON.stringify({id: session.id})
  };
}