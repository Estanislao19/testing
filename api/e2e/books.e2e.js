const request = require('supertest');

const createApp = require('../src/app');
const {config} = require('../src/config')
const {MongoClient} = require('mongodb')

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', ()=>{
  let app = null;
  let database = null;
  beforeAll(async()=>{
    app = createApp();
    server = app.listen(3001)
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser:true,
      useUnifiedTopology: true
    });
    await client.connect()
    database = client.db(DB_NAME)
  });

  afterAll(async() => {//cuando ya hemos corrido todos nuestros casos de prueba va a cerrar la app
  await server.close();
  await database.dropDatabase()//deja la database en vacio
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list books' ,async ()=>{

      const seedData =await database.collection('books').insertMany([
        {
        name:'Book1',
        year: 1998,
        author: 'nicolar'
        },
        {
          name:'Book2',
          year: 1998,
          author: 'nicolar'
          },
          {
            name:'Book3',
            year: 1998,
            author: 'nicolar'
            },

      ])

      console.log(seedData);
      return request(app)
      .get('/api/v1/books') //queremos ir a ese endoint
      .expect(200)
      .then(({body}) => {
        console.log(body);
        expect(body.length).toEqual(seedData.insertedCount);
      })
    });
  })
})
