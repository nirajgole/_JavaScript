const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList
} = require('graphql');
const app = express();

const authors = [
  { id: 1, name: 'J. K. Rowling' },
  { id: 2, name: 'J. R. R. Tolkien' },
  { id: 3, name: 'Brent Weeks' }
];

const books = [
  { id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
  { id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
  { id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
  { id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
  { id: 5, name: 'The Two Towers', authorId: 2 },
  { id: 6, name: 'The Return of the King', authorId: 2 },
  { id: 7, name: 'The Way of Shadows', authorId: 3 },
  { id: 8, name: 'Beyond the Shadows', authorId: 3 }
];

//author type
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents a author of a book',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books.filter(book => book.authorId === parent.id);
      }
    }
  })
});

//book type
const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This represents a book written by an author',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLString) },
    author: {
      type: AuthorType,
      resolve: book => {
        return authors.find(author => author.id === book.authorId);
      }
    }
  })
});

// fetch data
const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the root query',
  fields: () => ({
    book: {
      type: BookType,
      description: 'A single book',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (parent, args) => {
        return books.find(book => book.id === args.id);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'A List of all the books',
      resolve: () => books
    },
    author: {
      type: AuthorType,
      description: 'A single author',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (parent, args) => authors.find(author => author.id === args.id)
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'A List of all the authors',
      resolve: () => authors
    }
  })
});

//following queries are fired while testing the RootQueryType on GraphiQL interface
// {
//   books {
//     name
//     author {
//       name
//     }
//   }
//   authors {
//     name
//   }
//   book(id: 7) {
//     name
//   }
//   author(id: 2) {
//     name
//   }
// }

// mutate data
const RootMutationType = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'This is the root mutation',
  fields: () => ({
    //adding a new book
    addBook: {
      type: BookType,
      description: 'Add a new book',
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (parent, args) => {
        const book = {
          id: books.length + 1,
          name: args.name,
          authorId: args.authorId
        };
        books.push(book);
        return book;
      }
    },
    //adding a new author
    addAuthor: {
      type: AuthorType,
      description: 'Add a new author',
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        const author = {
          id: authors.length + 1,
          name: args.name
        };
        authors.push(author);
        return author;
      }
    }
  })
});

// following queries are fired while testing the RootMutationType on GraphiQL interface
// mutation{
//    addBook(name:"Test Book",authorId:1){
//      id,
//    name
//   }
//  }

const schema = new GraphQLSchema({
  query: RootQueryType, //default query on GraphiQL interface
  mutation: RootMutationType
});

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true, // GraphiQL is an in-browser tool for writing, validating, and testing GraphQL queries
    schema: schema
  })
);

app.listen(5555, () => console.log('Server started on port 5555'));
