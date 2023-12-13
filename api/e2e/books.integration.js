const request = require('supertest');

const createApp = require('../src/app');
const { generateManyBook } = require('../src/fakes/book.fake');


const { response } = require('express');
const { get } = require('../src/routes/books.router');

const mockGetAll = jest.fn();

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {}
})))


describe('Test for books', ()=>{
  let app = null;
  let server = null;
  beforeAll(()=>{
    app = createApp();
    server = app.listen(3001)
  });

  afterAll(async() => {//cuando ya hemos corrido todos nuestros casos de prueba va a cerrar la app
  await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list books' , ()=>{
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks)
      return request(app)
      .get('/api/v1/books') //queremos ir a ese endoint
      .expect(200)
      .then(({body}) => {
        console.log(body);
        expect(body.length).toEqual(1);
      })
    });
  })
})
