require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const config = {
    secret: process.env.SECRET, // used to sign and verify everything *required*
    key: 'hash' // the query string key to use (defaults to 'hash')
};
const signer = require('signed-url')(config);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/:id', (req, res) => {
    const options = {
        method: 'GET' // request method to validate
    };
    const url = req.protocol + '://' + req.get('host') + req.originalUrl;
    const valid = signer.verify(url, options);
    if(!valid) {
        return res.status(401).send({status: "Unauthorized"});
    }
    // now you can present the video 
    return res.send({valid})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})