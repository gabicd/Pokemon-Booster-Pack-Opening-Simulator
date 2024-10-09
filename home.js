//Backend JavaScript code
const fs = require('fs');
const csv = require('csvtojson');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
app.use(express.static(path.join(__dirname)));

app.get('/api/openPack', async (req, res) => {
    try {
        const cards = await csv().fromFile("pokemons(1).csv");  //open the database written on the csv file
        
        let rareHolo = [];  //initialize the arrays for each rarity
        let common = [];
        let uncommon = [];
        let rare = [];

        for (let card of cards) {   //separate the cards by rarity
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

        let pack = [];  //initialize the pack array 
        for (let i = 0; i < 7; i++) {
            let random = Math.floor(Math.random() * common.length); //randomize the common cards that will be included
            pack.push(common[random]);
        }

        for (let i = 0; i < 3; i++) {
            let random = Math.floor(Math.random() * uncommon.length);   //randomize the uncommon cards that will be included
            pack.push(uncommon[random]);
        }

        let random = Math.random();
        if (random < 1/3) { //determine if the pack will contain a normal rare card or a holo rare card
            let holoRandom = Math.floor(Math.random() * rareHolo.length);   //randomize the rare holo card that will be included
            pack.push(rareHolo[holoRandom]);
        } else {
            let rareRandom = Math.floor(Math.random() * rare.length);   //randomize the rare card that will be included
            pack.push(rare[rareRandom]);
        }

        res.json({ pack }); 
    } catch (error) {   //error treatment
        console.error('Error reading CSV:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/', (req, res) => {    //connect the files
    res.sendFile(path.join(__dirname, 'home.html')); 
});


app.listen(PORT, () => {    //open server
    console.log(`Server is running on http://localhost:${PORT}`);
});