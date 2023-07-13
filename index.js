import express from 'express'
// import { graphqlHTTP } from 'graphql-http'
// import schema from './schema'
const app = express()

app.get('/', (req, res) => {
  res.send('Graphql is amazing.')
})

// const root = { hello: () => "Hi, I'm Manny" }
// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root
//   })
// )

app.listen(8080, () =>
  console.log('Running server on port localhost:8080/graphql')
)
