import express from 'express'
import { createHandler } from 'graphql-http/lib/use/express'

import resolvers from './data/resolver'
import schema from './data/schema'

// The root provides a resolver function for each API endpoint
const root = resolvers

const app = express()
// !graphql-http does not support interactive graphql playground
//tested on google-chrome "Altair GraphQL Client" plugin
const handler = createHandler({
  schema,
  rootValue: root
})

app.use('/', handler)

app.listen({ port: 4000 })
console.log('Running a GraphQL API server at http://localhost:4000/')
