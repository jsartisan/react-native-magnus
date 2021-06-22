require('dotenv').config();

module.exports = {
  mailchimp: {
    url: 'https://us3.api.mailchimp.com/3.0',
    key: process.env.MAILCHIMP_KEY,
    list: 'd7cb42178b',
  },
};
