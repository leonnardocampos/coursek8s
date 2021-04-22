const keys = require('./keys');
const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  auth_pass: keys.redisPassword
});
client.set('visits', 1);


app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  })
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
