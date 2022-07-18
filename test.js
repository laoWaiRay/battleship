const Ship = require('./Ship.js')
const Gameboard = require('./Gameboard.js')
// Ship factory function should create a ship object with a length property

test('ship has a length', () => {
  const ship = Ship(5);
  expect(ship.size).toBe(5);
})

test('ship has a positions array', () => {
  const ship = Ship(5);
  expect(ship.positions).toEqual([0,0,0,0,0]);
})

test('hit function changes positions array', () => {
  const ship = Ship(5);
  ship.hit(0);
  expect(ship.positions).toEqual([1,0,0,0,0]);
})

test('isSunk function returns true', () => {
  const ship = Ship(5);
  ship.positions.forEach((position, index) => {
    ship.positions[index] = 1;
  })
  expect(ship.isSunk()).toBe(true);
})

test('isSunk function returns false', () => {
  const ship = Ship(5);
  ship.positions[0] = 1;
  expect(ship.isSunk()).toBe(false);
})

test('gameboard is a 10x10 array', () => {
  const gameboard = Gameboard();
  expect(gameboard.grid.length).toBe(10);
  expect(gameboard.grid[0].length).toBe(10);
  expect(gameboard.grid[9].length).toBe(10);
})

test('place a ship of size 5 at start of grid horizontally', () => {
  const ship = Ship(5, 'Carrier');
  const gameboard = Gameboard();
  expect(gameboard.place(ship, [0,0], 'x')).toEqual(
   [[{ ship:'Carrier', isHit: false }, { ship:'Carrier', isHit: false }, { ship:'Carrier', isHit: false }, { ship:'Carrier', isHit: false }, { ship:'Carrier', isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }]]);
})

test('place a ship of size 5 at start of grid vertically', () => {
  const ship = Ship(5, 'Carrier');
  const gameboard = Gameboard();
  expect(gameboard.place(ship, [0,0], 'y')).toEqual(
   [[{ ship:'Carrier', isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:'Carrier', isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:'Carrier', isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:'Carrier', isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:'Carrier', isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }]]);
})

// test('close to edge horizontal', () => {
//   const gameboard = Gameboard();
//   const ship = Ship(5);
//   expect(gameboard.isCloseToEdge(ship, [0,9], 'x')).toBe(true)
// })

// test('close to edge vertical', () => {
//   const gameboard = Gameboard();
//   const ship = Ship(5);
//   expect(gameboard.isCloseToEdge(ship, [9,0], 'y')).toBe(true)
// })

test('edge case: place a ship of size 5 at starting position [0,8] horizontally', () => {
  const ship = Ship(5, 'Carrier');
  const gameboard = Gameboard();
  expect(gameboard.place(ship, [0,8], 'x')).toEqual(
   [[{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:'Carrier', isHit: false }, { ship:'Carrier', isHit: false }, { ship:'Carrier', isHit: false }, { ship:'Carrier', isHit: false }, { ship:'Carrier', isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }]]);
})

test('edge case: place a ship of size 5 at starting position [9,9] vertically', () => {
  const ship = Ship(5,'Carrier');
  const gameboard = Gameboard();
  expect(gameboard.place(ship, [9,9], 'y')).toEqual(
   [[{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:'Carrier', isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:'Carrier', isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:'Carrier', isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:'Carrier', isHit: false }],
   [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:'Carrier', isHit: false }]]);
})

test('confirm hit', () => {
  const ship = Ship(5,'Carrier');
  const gameboard = Gameboard();
  gameboard.place(ship, [9,9], 'y');
  expect(gameboard.checkHit([9,9])).toBe(true);
})

test('confirm miss', () => {
  const ship = Ship(5,'Carrier');
  const gameboard = Gameboard();
  gameboard.place(ship, [9,9], 'y');
  expect(gameboard.checkHit([9,8])).toBe(false);
})

test('send hit data to correct ship', () => {
  const ship1 = Ship(3);
  const ship2 = Ship(4);
  const ship3 = Ship(5);
  const gameboard = Gameboard();
  gameboard.place(ship1, [0,0], 'x');
  gameboard.place(ship2, [9,9], 'x');
  gameboard.place(ship3, [3,0], 'x');

  gameboard.receiveAttack([0,0]);
  expect(ship1.positions[0]).toBe(1);
})



// [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
//    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
//    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
//    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
//    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
//    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
//    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
//    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
//    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }],
//    [{ ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }, { ship:null, isHit: false }]