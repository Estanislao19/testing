const { generateManyBook } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },

];

const spyGetAll = jest.fn();


const MongoLibStub = {//va a suplantar a nuestra clase mongoLib
  getAll: spyGetAll,
  create: () => {},
}

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub))//voy a crear una suplantacion de esa libreria

describe('Test for BooksService', () => {
  let service;
  beforeEach(() =>{
    service = new BooksService(); //para cada prueba va a crear una instancia de ese servicio nuevo
  });

  describe('test for getBooks', () => {
   test('should return a list book', async () => {
    const fakeBooks = generateManyBook(20)
    spyGetAll.mockResolveValue(fakeBooks);


    const books = await service.getBooks({});
    console.log(books);

    expect(books.length).toEqual(fakeBooks.length);
    expect(spyGetAll).toHaveBeenCalled()
    expect(spyGetAll).toHaveBeenCalledWith('books', {})
   });
  })
});
