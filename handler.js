'use strict';
const cheerio = require('cheerio-httpcli');

module.exports.testIp = (event, context, callback) => {
  cheerio.fetch('http://tools.up2a.info/ja/requestheaders').then(({ $ }) => {
    const addr = $('.REMOTE_ADDR').text();
    const response = {
      statusCode: 200,
      body: { addr }
    };

    callback(null, response);
  });
};
