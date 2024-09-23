import { nanoid } from 'nanoid';

class Book {
  constructor(id, name, authorId) {
    this.id = id;
    this.name = name;
    this.authorId = authorId;
  }
}

const bookHolder = {};

const resolvers = {
  getBook: ({ id }) => {
    return new Book(id, bookHolder[id]);
  },
  addBook: ({ book }) => {
    let id = nanoid();
    bookHolder[id] = book;
    return new Book(id, book);
  }
};

export default resolvers;
