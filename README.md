# Example on how to sign a URL

1. Install dependencies: `npm install`
2. Copy the file `.env.example` to `.env` file and change the secret to a value that only your server will know.
3. Run `node sign.js http://localhost:3000/hello` (use the url that you'd like to sign)
4. Run the example express application with `node index.js` 
5. Access the `signedUrl` that was generated on step **3**.
