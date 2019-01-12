// WORKING WITH CRYPTO
const crypto = require('crypto');

const generateSalt = () => {
  return crypto.randomBytes(128).toString('base64');
};

const generateHashedPassword = (salt, pwd) => {
  let hmac = crypto.createHmac('sha256', salt);
  return hmac.update(pwd).digest('hex');
};

const salt = generateSalt();
console.log('SALT:', salt);

const pass = 'pass123';
const hashedPass = generateHashedPassword(salt, pass);
console.log('HASHED PWD:', hashedPass);
// -----------------------------------------------------------
