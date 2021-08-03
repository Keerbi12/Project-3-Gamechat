const db =require('../config/connection');
const { Game } = requre('../models');

const gameData = require('./gamesData.json');

db.oncedb.once('open', async () => {
    await Game.deleteMany({});
  
    const games = await Game.insertMany(gameData);
  
    console.log('Games seeded!');
    process.exit(0);
  });
  