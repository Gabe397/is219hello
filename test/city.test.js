const City = require('../Models/City');

test('Can create a city object', () => {
    let city = City.create();
    expect(city).toBeInstanceOf(City);
});