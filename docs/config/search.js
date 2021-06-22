require('dotenv').config();

module.exports = {
  algolia: {
    app_id: process.env.GATSBY_ALGOLIA_APP_ID,
    admin_api_key: process.env.GATSBY_ALGOLIA_ADMIN_API_KEY,
  },
};
