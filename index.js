require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
const path = require("path")

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', 
}));

app.use(express.static(path.resolve(__dirname, 'fin-learn', 'build')))

app.get("/test",(req,res)=>{
    res.send("Express app is running")
})

// Initialize Plaid client
const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV], 
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);


app.post('/api/create_link_token', async (req, res) => {
  try {
    const response = await plaidClient.linkTokenCreate({
      user: {
        client_user_id: 'unique-user-id', // A unique identifier for the user
      },
      client_name: 'Your App Name',
      products: ['auth', 'transactions'],
      country_codes: ['IN'],
      language: 'en',
    });
    const linkToken = response.data.link_token;
    res.json({ link_token: linkToken });
  } catch (error) {
    console.error('Error creating link token:', error.response.data);
    res.status(500).json({ error: error.response.data });
  }
});

//serving frontend routes first
app.get('*', (req, res) => {
  res.sendFile(
      path.resolve(__dirname, 'frontend', 'build', 'index.html'),
      function (err) {
          if (err) {
              res.status(500).send(err)
          }
      }
  )
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
