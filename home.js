const fs = require('fs');
const csv = require('csvtojson');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
app.use(express.static(path.join(__dirname)));

app.get('/api/openPack', async (req, res) => {
    try {
        const cards = await csv().fromFile("pokemons(1).csv");
        
        let rareHolo = [];
        let common = [];
        let uncommon = [];
        let rare = [];

        for (let card of cards) {
            if (card['Rarity'] == 'Rare Holo') {
                rareHolo.push(card);
            } else if (card['Rarity'] == 'Rare') {
                rare.push(card);
            } else if (card['Rarity'] == 'Common') {
                common.push(card);
            } else {
                uncommon.push(card);
            }
        }

        let pack = [];
        for (let i = 0; i < 7; i++) {
            let random = Math.floor(Math.random() * common.length);
            pack.push(common[random]);
        }

        for (let i = 0; i < 3; i++) {
            let random = Math.floor(Math.random() * uncommon.length);
            pack.push(uncommon[random]);
        }

        let random = Math.random();
        if (random < 1/3) {
            let holoRandom = Math.floor(Math.random() * rareHolo.length);
            pack.push(rareHolo[holoRandom]);
        } else {
            let rareRandom = Math.floor(Math.random() * rare.length);
            pack.push(rare[rareRandom]);
        }

        res.json({ pack }); 
    } catch (error) {
        console.error('Error reading CSV:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html')); 
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});