const { faker } = require('@faker-js/faker');

const generateOneBook = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  }
}

const generateManyBook = (size) => () => {
  const limit = size ?? 10;//sino me envia el tamanio me genera 10 libros
  const fakeBooks = []
  for(let i=0; i<limit.length; i+=1){
    fakeBooks.push(generateManyBook())
  }
  return [...fakeBooks];
}

module.exports = {generateOneBook, generateManyBook};
