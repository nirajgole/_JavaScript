const https = require('https');

const res = async () => {
  return https.get(
    `https://jsonmock.hackerrank.com/api/article_users?username=${'epaga'}`,
    resp => {
      let data = '';
      // A chunk of data has been received.
      resp.on('data', chunk => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(JSON.parse(data));
      });
    }
  );
};

res();

// const res = async () => {
//   return await fetch(
//     `https://jsonmock.hackerrank.com/api/article_users?username=${'epaga'}`
//   )
//     .then(res => res.json())
//     .then(res => console.log(res));
// };

// res();
