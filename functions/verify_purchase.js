// lambda function
// available under: /.netlify/functions/verify_purchase
let Stripe = require('stripe')

let stripeKey = process.env.NETLIFY_DEV ? process.env.STRIPE_DEV_KEY : process.env.STRIPE_KEY;
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
  const sessionId = JSON.parse(event.body).sessionId;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  
  if(!session) {
    return {
      statusCode: 404
    };
  }

  const customer = await stripe.customers.retrieve(session.customer);

  if(!customer) {
    return {
      statusCode: 404
    }
  }

  return {
    statusCode: 200,
  };
}