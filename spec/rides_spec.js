var rides = require('../lib/rides.js')

describe('Rides', function() {
  it('determines if child is tall enought to ride', function() {

    var child1 = {
      height: 3,
      name: "Julian",
      age: 3
    };

    var ride1 = {
      minHeight: 3,
      maxHeight: 7
    };

    expect(rides.childTallEnough(child1, ride1)).toEqual(true)

  })
})
