const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dns = require('dns');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Basic route to test server
app.get('/', (req, res) => {
    res.json({ message: "Hello World!" })
})

let urlDatabase = {}; // This will act as our in-memory database
let counter = 1; // This will keep track of the short_url

app.post('/api/shorturl', (req, res) => {
    const { url } = req.body;

    // Use URL constructor for validation
    try {
        new URL(url)
    } catch (error) {
        return res.json({ error: 'invalid URL' })
    }

    // Use dns.lookup to verify the URL's hostname
    const urlObj = new URL(url);
    dns.lookup(urlObj.hostname, (err, address) => {
        if(err){
            return res.json({ error: 'invalid URL' })
        }

        const shortUrl = counter++;
        urlDatabase[shortUrl] = url;

        res.json({
            original_url: url,
            short_url: shortUrl,
        })
    })
})

app.get('/api/shorturl/:short_url', (req, res) => {
    const shortUrl = req.params.short_url;
    const originalUrl = urlDatabase[shortUrl];
  
    if (originalUrl) {
      res.redirect(originalUrl);
    } else {
      res.status(404).json({ error: 'No short URL found for the given input' });
    }
  });
  

app.listen(PORT, () => {
    console.log(`Sèvè a ap fonksyone la sou pò ${PORT}`)
})