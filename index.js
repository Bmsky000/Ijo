const express = require('express');
const axios = require('axios');
const fs = require('fs');
const { tiktok, ndown, ytdown, twitterdown, insta } = require("nayan-media-downloader")
const CharacterAI = require("node_characterai");

const characterAI = new CharacterAI();
const app = express();

global.error = "BimaSky: false"


app.get('/api/cai', async (req, res) => {
    try {
        const url = req.query.teks;
        const beta = await characterAI.authenticateWithToken("420378e7dfe5c852331028f0b3de25beda3006f2");
        const characterId = "ZVUK_CGjEymmyNInVX-0LzsvfnacOEQMIn7fxBZlQkU";
        const chat = await characterAI.createOrContinueChat(characterId);
  const response = await chat.sendAndAwaitResponse(teks, true);
  const clear = response.text;
      res.header('Content-Type: application/json')
        res.type('json').send(JSON.stringify(clear, null, 2))
    } catch (error) {
        res.status(500).json({ error: global.error });
    }
});

app.get('/api/tiktok', async (req, res) => {
    try {
        const url = req.query.url;
   let URL = await tiktok(url)
      res.header('Content-Type: application/json')
        res.type('json').send(JSON.stringify(URL, null, 2))
    //  let ab = URL.data.video
 // res.json({ab})
    } catch (error) {
        res.status(500).json({ error: global.error });
    }
});

app.get('/api/fb', async (req, res) => {
    try {
        const url = req.query.url;
   let URL = await ndown(url)
      res.header('Content-Type: application/json')
        res.type('json').send(JSON.stringify(URL, null, 2))
} catch (error) {
        res.status(500).json({ error: global.error });
    }
});

app.get('/api/youtubemp4', async (req, res) => {
    try {
        const url = req.query.url;
   let URL = await ytdown(url)
      res.header('Content-Type: application/json')
        res.type('json').send(JSON.stringify(URL, null, 2))
} catch (error) {
        res.status(500).json({ error: global.error });
    }
});

app.get('/api/twitter', async (req, res) => {
    try {
        const url = req.query.url;
   let URL = await twitterdown(url)
      res.header('Content-Type: application/json')
        res.type('json').send(JSON.stringify(URL, null, 2))
} catch (error) {
        res.status(500).json({ error: global.error });
    }
});

app.get('/api/instagram', async (req, res) => {
    try {
        const url = req.query.url;
   let URL = await instadown(url)
      res.header('Content-Type: application/json')
        res.type('json').send(JSON.stringify(URL, null, 2))
} catch (error) {
        res.status(500).json({ error: global.error });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
