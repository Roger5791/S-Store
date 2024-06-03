// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {


const line_items = req.body.cartItem.map((item) => {
  console.log(cartItem)
  return {
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
        images: [item.image],
        description: item.desc,
        metadata: {
          id: item.id,
        },
      },
      unit_amount: item.price * 100,
    },
    quantity: item.cartQuantity,
  };
});




  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: 'http://localhost:5000/success',
    cancel_url: 'http://localhost:5000/cancel',
  });

  res.send({ url: session.url });

})


app.listen(5001, () => console.log(`Listening on port ${5001}!`));