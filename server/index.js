const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); //REVIEW on charge le model User
require('./services/passport');// REVIEW on fait appel à toute notre configuration de passport

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }); // REVIEW  connexion à mongoDB (aussi simple que ça?)

const app = express(); // REVIEW notre app va utiliser express

app.use(
  cookieSession({
    //REVIEW notre app va utiliser le module cookie-session
    maxAge: 30 * 24 * 60 * 60 * 1000, //REVIEW la durée de vie du cookie (ici 30 jours exprimés en millisecondes)
    keys: [keys.cookieKey] //REVIEW une clé générée arbitrairement pour notre exemple en local
  })
);
app.use(passport.initialize()); //REVIEW on démarre la prise en charge de passport
app.use(passport.session()); // REVIEW on indique à passport qu'on gère des sessions(notamment avec cookieSession)

require('./routes/authRoutes')(app); // REVIEW on importe les routes gérées par express

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('listening on http://localhost:' + PORT);
