const {SHA256} = require('crypto-js');
const jwt      = require('jsonwebtoken');
const bcrypt   = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  console.log('Salt', salt);
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('Hash', hash);

  })
});

var hashPassword = '$2a$10$AnAwlT1LoLCwKT3lLsbvwepeD0vwxRwxJDXpsHrCew0uumhxW3yUm';

bcrypt.compare(password, hashPassword, (err, result) => {
  console.log(result);
})

//console.log('Message', message);
