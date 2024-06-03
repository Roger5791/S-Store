// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51OxW2uSJ3iiAvjLzwlW7FuR4SaeI1GNWUmkoegGxk0yvr8v8QLSWHYseAqilseXo5aLAbqgsmI8oGkkUPPAfNTvc00qjdTH52J')


app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1PNaLvSJ3iiAvjLzSA9vnWxb",
        quantity: 1,
      },
      {
        price: "price_1PKyKlSJ3iiAvjLzN06sw3EP",
        quantity: 1,
      },
      {
        price: "price_1PNaL0SJ3iiAvjLzKdFf6ESG",
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:5000/success',
    cancel_url: 'http://localhost:5000/cancel',
  });

  res.redirect(303, session.url);
});

app.listen(5001, () => console.log(`Listening on port ${5001}!`));