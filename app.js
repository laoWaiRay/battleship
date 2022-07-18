import Ship from "./Ship.js";
import Gameboard from "./Gameboard.js";
import Player from "./Player.js";
import ComputerPlayer from "./ComputerPlayer.js";

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
const player2 = ComputerPlayer('Player 2', gameboard2, shipList2);

gameboard1.place(battleship1, [0,0], 'x');
gameboard2.place(battleship2, [9,9], 'x');

player2.attackRandom(player1);
player2.attackRandom(player1);
