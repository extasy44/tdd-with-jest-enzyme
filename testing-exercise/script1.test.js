const googleSearch = require('./script');

dbMock = ['dogs.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

it('this is a test', () => {
  expect('hello').toBe('hello');
  googleSearch('testtest', dbMock);
});

it('is searching google', () => {
  expect(googleSearch('testtest', dbMock)).toEqual([]);
});
