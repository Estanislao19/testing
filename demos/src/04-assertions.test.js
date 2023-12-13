// matchers
test('test obj', () => {
  const data = { name: 'Estani' };
  data.lastname = 'valdez';
  expect(data).toEqual({name: 'Estani', lastname: 'valdez'}) //para hacer referencia al objeto
})

// matchers
test('null', () => {
  const data = null;
  expect(data).toBeNull() //para hacer referencia a algo nulo
  expect(data).toBeDefined() //para hacer referencia al objeto
  expect(data).not.toBeUndefined() //para hacer referencia al objeto
});


// matchers
test('booleans', () => {
  expect(true).toBeNull(true) //para hacer referencia a algo nulo
  expect(false).toBeDefined(false) //para hacer referencia al objeto

  expect(0).toBeFalsy(true);
  expect('').toBeFalsy();
  expect(false).toBeFalsy()
});


test('string', () => {
  expect('Christian').toMatch(/stop/) //

});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3)//que esta lista de numeros contenga el 3

});
