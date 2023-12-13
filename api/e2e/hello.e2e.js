const request = require('supertest');

const createApp = require('../src/app');
const { response } = require('express');

describe('Test for hello endpoint', ()=>{
  let app = null;
  let server = null;
  beforeAll(()=>{
    app = createApp();
    server = app.listen(3001)
  });

  afterAll(async() => {//cuando ya hemos corrido todos nuestros casos de prueba va a cerrar la app
  await server.close();
  });

  describe('Test for [GET] /', () => {
    test('should return "Hello World!"' , ()=>{
      return request(app)
      .get('/') //queremos ir a ese endoint
      .expect(200)
      .then(response => {
        expect(response.text).toEqual('Hello World!');
      })
    });
  })
})
