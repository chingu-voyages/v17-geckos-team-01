require('dotenv').config();

const keys = [
  '236e138b3c80fc33a9245df42338e83e', // Sean's React App key
  'ac37f90ddabc6d816c814402117d6c19', // Karthik's Chingu3 app key
  '3e4fba3b78fbdd3b994771b3cfc4cd42', // Karthik's Chingu app key
  'c2754a37f4f727f59af2d1f0fdd39e5a', // Karthik's Chingu2 app key
  '323b1c9c81eece2d6b20ca717a01e80d', // Karthik's Chingu4 app key
  '53a851ebda9cab4ed0a209eaee5db56a', // Karthik's Chingu 5 app key
  '9b30f9c388d07ce1058b3933676472f4', // Sean's Stiforr's App key
  '43fdb0bba16b6d9bb945439813e6fcac', //Sean Test App key


]
module.exports = {
  env: {
    KEYS_ARRAY: keys,
    },
  }