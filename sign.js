require('dotenv').config()

const config = {
    secret: process.env.SECRET, // used to sign and verify everything *required*
    key: 'hash' // the query string key to use (defaults to 'hash')
};
const signer = require('signed-url')(config);
const options = {
    method: 'GET',
};


const url = process.argv[2];
console.log({url})
const signedUrl = signer.sign(url, options);
// send this url to the VMC API
console.log({signedUrl});