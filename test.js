import Ship from "./Ship.js";
import Gameboard from "./Gameboard.js";
import Player from "./Player.js";
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
   [[{ ship:'Carrier', isHit: null }, { ship:'Carrier', isHit: null }, { ship:'Carrier', isHit: null }, { ship:'Carrier', isHit: null }, { ship:'Carrier', isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
    [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
    [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
    [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
    [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
    [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
    [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
    [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
    [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
    [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }]]);
})

test('place a ship of size 5 at start of grid vertically', () => {
  const ship = Ship(5, 'Carrier');
  const gameboard = Gameboard();
  expect(gameboard.place(ship, [0,0], 'y')).toEqual(
   [[{ ship:'Carrier', isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:'Carrier', isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:'Carrier', isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:'Carrier', isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:'Carrier', isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }]]);
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
   [[{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:'Carrier', isHit: null }, { ship:'Carrier', isHit: null }, { ship:'Carrier', isHit: null }, { ship:'Carrier', isHit: null }, { ship:'Carrier', isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }]]);
})

test('edge case: place a ship of size 5 at starting position [9,9] vertically', () => {
  const ship = Ship(5,'Carrier');
  const gameboard = Gameboard();
  expect(gameboard.place(ship, [9,9], 'y')).toEqual(
   [[{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:'Carrier', isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:'Carrier', isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:'Carrier', isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:'Carrier', isHit: null }],
   [{ ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:null, isHit: null }, { ship:'Carrier', isHit: null }]]);
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

test('send hit data to correct ship (1)', () => {
  const ship1 = Ship(3, 'Destroyer');
  const ship2 = Ship(4, 'Battleship');
  const ship3 = Ship(5, 'Carrier');
  const listOfShips = [ship1, ship2, ship3];
  const gameboard = Gameboard();
  gameboard.place(ship1, [0,0], 'x');
  gameboard.place(ship2, [9,9], 'x');
  gameboard.place(ship3, [3,0], 'x');

  gameboard.receiveAttack([0,0], listOfShips);
  expect(ship1.positions[0]).toBe(1);
})

test('send hit data to correct ship (2)', () => {
  const ship1 = Ship(3, 'Destroyer');
  const ship2 = Ship(4, 'Battleship');
  const ship3 = Ship(5, 'Carrier');
  const listOfShips = [ship1, ship2, ship3];
  const gameboard = Gameboard();
  gameboard.place(ship1, [0,0], 'x');
  gameboard.place(ship2, [9,9], 'x');
  gameboard.place(ship3, [3,0], 'x');

  gameboard.receiveAttack([9,7], listOfShips);
  expect(ship2.positions[1]).toBe(1);
})

test('send hit data to correct ship (3)', () => {
  const ship1 = Ship(3, 'Destroyer');
  const ship2 = Ship(4, 'Battleship');
  const ship3 = Ship(5, 'Carrier');
  const listOfShips = [ship1, ship2, ship3];
  const gameboard = Gameboard();
  gameboard.place(ship1, [0,0], 'x');
  gameboard.place(ship2, [9,9], 'x');
  gameboard.place(ship3, [3,0], 'x');

  gameboard.receiveAttack([3,2], listOfShips);
  expect(ship3.positions[2]).toBe(1);
})

test('record a miss on the grid', () => {
  const ship1 = Ship(3, 'Destroyer');
  const ship2 = Ship(4, 'Battleship');
  const ship3 = Ship(5, 'Carrier');
  const listOfShips = [ship1, ship2, ship3];
  const gameboard = Gameboard();
  gameboard.place(ship1, [0,0], 'x');
  gameboard.place(ship2, [9,9], 'x');
  gameboard.place(ship3, [3,0], 'x');

  gameboard.receiveAttack([0,9], listOfShips);
  expect(gameboard.grid[0][9].isHit).toBe(false);
})

test('record a hit on the grid', () => {
  const ship1 = Ship(3, 'Destroyer');
  const ship2 = Ship(4, 'Battleship');
  const ship3 = Ship(5, 'Carrier');
  const listOfShips = [ship1, ship2, ship3];
  const gameboard = Gameboard();
  gameboard.place(ship1, [0,0], 'x');
  gameboard.place(ship2, [9,9], 'x');
  gameboard.place(ship3, [3,0], 'x');

  gameboard.receiveAttack([0,0], listOfShips);
  expect(gameboard.grid[0][0].isHit).toBe(true);
})

test('report all ships on gameboard are sunk', () => {
  const ship1 = Ship(3, 'Destroyer');
  const ship2 = Ship(4, 'Battleship');
  const listOfShips = [ship1, ship2];
  const gameboard = Gameboard();
  gameboard.place(ship1, [0,0], 'x');
  gameboard.place(ship2, [9,9], 'x');
  gameboard.receiveAttack([0,0], listOfShips);
  gameboard.receiveAttack([0,1], listOfShips);
  gameboard.receiveAttack([0,2], listOfShips);
  gameboard.receiveAttack([9,9], listOfShips);
  gameboard.receiveAttack([9,8], listOfShips);
  gameboard.receiveAttack([9,7], listOfShips);
  gameboard.receiveAttack([9,6], listOfShips);

  expect(gameboard.isGameOver()).toBe(true);
})

test('player 1 can attack player 2 gameboard', () => {
  const carrier1 = Ship(5, 'carrier');
  const battleship1 = Ship(4, 'battleship');
  const destroyer1 = Ship(3, 'destroyer');
  const submarine1 = Ship(3, 'submarine');
  const patrol1 = Ship(2, 'patrol');
  
  const carrier2 = Ship(5, 'carrier');
  const battleship2 = Ship(4, 'battleship');
  const destroyer2 = Ship(3, 'destroyer');
  const submarine2 = Ship(3, 'submarine');
  const patrol2 = Ship(2, 'patrol');
  
  const shipList1 = [carrier1, battleship1, destroyer1, submarine1, patrol1];
  const shipList2 = [carrier2, battleship2, destroyer2, submarine2, patrol2];
  
  const gameboard1 = Gameboard();
  const gameboard2 = Gameboard();
  
  const player1 = Player('Player 1', gameboard1, shipList1);
  const player2 = Player('Player 2', gameboard2, shipList2);
  
  gameboard1.place(battleship1, [0,0], 'x');
  gameboard2.place(battleship2, [9,9], 'x');
  player1.attack(player2, [9,9]);
  expect(battleship2.positions[3]).toBe(1);
})

test('player 2 can attack player 1 gameboard', () => {
  const carrier1 = Ship(5, 'carrier');
  const battleship1 = Ship(4, 'battleship');
  const destroyer1 = Ship(3, 'destroyer');
  const submarine1 = Ship(3, 'submarine');
  const patrol1 = Ship(2, 'patrol');
  
  const carrier2 = Ship(5, 'carrier');
  const battleship2 = Ship(4, 'battleship');
  const destroyer2 = Ship(3, 'destroyer');
  const submarine2 = Ship(3, 'submarine');
  const patrol2 = Ship(2, 'patrol');
  
  const shipList1 = [carrier1, battleship1, destroyer1, submarine1, patrol1];
  const shipList2 = [carrier2, battleship2, destroyer2, submarine2, patrol2];
  
  const gameboard1 = Gameboard();
  const gameboard2 = Gameboard();
  
  const player1 = Player('Player 1', gameboard1, shipList1);
  const player2 = Player('Player 2', gameboard2, shipList2);
  
  gameboard1.place(battleship1, [0,0], 'x');
  gameboard2.place(battleship2, [9,9], 'x');
  player2.attack(player1, [0,0]);
  expect(battleship1.positions[0]).toBe(1);
})