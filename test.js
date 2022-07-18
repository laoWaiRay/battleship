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
  const ship = Ship(5);
  const gameboard = Gameboard();
  expect(gameboard.place(ship, [0,0], 'x')).toEqual(
   [[1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
})

test('place a ship of size 5 at start of grid vertically', () => {
  const ship = Ship(5);
  const gameboard = Gameboard();
  expect(gameboard.place(ship, [0,0], 'y')).toEqual(
   [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
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

test('edge case: place a ship of size 5 at starting position [0,9] horizontally', () => {
  const ship = Ship(5);
  const gameboard = Gameboard();
  expect(gameboard.place(ship, [0,8], 'x')).toEqual(
   [[0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
})

test('edge case: place a ship of size 5 at starting position [9,9] vertically', () => {
  const ship = Ship(5);
  const gameboard = Gameboard();
  expect(gameboard.place(ship, [9,9], 'y')).toEqual(
   [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]]);
})