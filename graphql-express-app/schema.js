// import { buildSchema } from 'graphql';
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Book {
        id: ID
        name: String!
        authorId: ID!
        author: Author!
    }
    type Author {
        id: ID
        name: String!
        books: [Book!]!
    }
    enum Tag {
        FICTION,
        SCI-FI,
        HORROR,
        ROMANCE,
        HISTORICAL,
        CRIME,
    }

    type Query {
        getBook(id: ID!): Book
        getBooks: [Book!]!
        getAuthor(id: ID!): Author
        getAuthors: [Author!]!
    }

    input BookInput {
        id: ID
        name: String!
        authorId: ID!
    }

    input AuthorInput {
        id: ID
        name: String!
    }

    type Mutation {
        addBook(book: BookInput): Book
        addAuthor(author: AuthorInput): Author
    }

`);

module.exports = schema;
