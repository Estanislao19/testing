const MongoLib = require('../lib/mongo.lib');

class BooksService {
  constructor() {
    this.collection = 'books'; //coleccion
    this.mongoDB = new MongoLib();
  }

  getBooks(query) { //metodos para obtener
    return this.mongoDB.getAll(this.collection, query);
  }

  createBook(newBook) { //metodos para crear libros
    return this.mongoDB.create(this.collection, newBook);
  }
}

module.exports = BooksService;
