const express = require('express');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config();

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.MAILING_LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);

const port = process.env.PORT || 3001;
app.listen(port);

//routes
// app.get('/' ...);
app.get('/api/memberList', (req, res) => {
    mailchimp.get(`/lists/${list_id}/members`)
    .then(function(results){
      res.send(results);
    })
    .catch(function(err){
      res.send(err);
    });
  });
// app.post("/api/signup", (req,res) => {
//     mailchimp.post({
//         email_address: req.body.email_address
//     })
//       .then(() => {
//           res.redirect(307, '/api/signup')
//     })
//       .catch((err) => {
//           res.status(401).json(err);
//       });
// });

console.log(`express app listening on port ${port}`);