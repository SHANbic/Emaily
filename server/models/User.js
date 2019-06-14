const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  name : String,
  mail : String
});

mongoose.model('users', userSchema) //REVIEW On indique à la base de données qu'on va utiliser le schéma users
