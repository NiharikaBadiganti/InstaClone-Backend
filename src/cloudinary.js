const cloudinary = require('cloudinary');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
    cloudName : process.env.cloudName,
    apiKey : process.env.apiKey,
    apiSecret : process.env.apiSecret
});

module.exports = cloudinary;