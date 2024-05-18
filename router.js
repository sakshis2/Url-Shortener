const express = require('express');
const shortid = require('shortid');

const router = express.Router();


console.log("hi sakshi");

const urlDatabase = {};
router.use(express.json());

router.post('/shorten', (req, res) => {
    const { url } = req.body;
  
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }
  
    const id = shortid.generate();
    urlDatabase[id] = url;
  
    res.json({ shortUrl: `http://localhost:3000/${id}` });
  });

module.exports = router;
