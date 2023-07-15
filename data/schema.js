// Construct a schema, using GraphQL schema language

import { buildSchema } from 'graphql'

//!workaround for enum types in graphql, getting error while creating item with enum values,
//   enum SoldOut{
//   SOLDOUT,
//   INSTOCK
// }
//!currently replaced with boolean type
const schema = buildSchema(`

  type Product {
    id:ID,
    name:String,
    description:String,
    price:Float,
    soldOut:Boolean
    stores:[Store]!
  }

  type Store{
    store:String
  }

  type Query{
    getProduct(id:ID):Product
  }

  input StoreInput{
    store:String
  }

  input ProductInput{
    id:ID,
    name:String!,
    description:String,
    price:Float!,
    soldOut:Boolean!,
    stores:[StoreInput]!
  }

  type Mutation{
    createProduct(input:ProductInput):Product
  }
`)

export default schema
