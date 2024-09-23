// import express from 'express';
// import { graphqlHTTP } from 'express-graphql';
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema');

// import schema from './schema';
// import resolvers from './resolvers';

const app = express();

app.get('/', (req, res) => {
  res.send('New Server is running');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(3333, () => console.log('Server started on port 3333'));
