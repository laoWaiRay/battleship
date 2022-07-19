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

// gameboard1.place(battleship1, [0,0], 'x');
// gameboard2.place(battleship2, [9,9], 'x');

let cursorDirection = 'x';


// DOM stuff

const playerSquares = document.querySelectorAll('.player-square');
const computerSquares = document.querySelectorAll('.computer-square');
const playerRotateBtn = document.querySelector('#player-rotate-btn');

playerRotateBtn.addEventListener('click', () => {
  if (cursorDirection === 'x') {
    cursorDirection = 'y';
  } else {
    cursorDirection = 'x';
  }
})

computerSquares.forEach((square) => {
  square.addEventListener('click', (e) => {
    const squareNumber = e.target.id.slice(16);
    const stringCoordinates = squareNumber.split('');
    const numCoordinates = stringCoordinates.map((el) => parseInt(el));
    if(player2.gameboard.grid[numCoordinates[0]][numCoordinates[1]].isHit === true || 
        player2.gameboard.grid[numCoordinates[0]][numCoordinates[1]].isHit === false) return;
    player1.attack(player2, numCoordinates);
    gameboard2.renderGameboard(true);

    if (player2.gameboard.isGameOver() === true) {
      alert('Game Over! Player 1 Wins!')
    } else {
      player2.attackRandom(player1);
      gameboard1.renderGameboard(false);
      if (player1.gameboard.isGameOver() === true) {
        alert('Game Over! Player 2 Wins!')
      }
    }
  })
})

const placePlayerShips = () => {
  console.log('Place your Carrier');

  playerSquares.forEach((square, index) => {
    square.addEventListener('mouseover', () => {
      if (cursorDirection === 'x') {
        playerSquares[index].classList.add('shadow');
        playerSquares[index + 1].classList.add('shadow');
        playerSquares[index + 2].classList.add('shadow');
        playerSquares[index + 3].classList.add('shadow');
        playerSquares[index + 4].classList.add('shadow');
      } else {
        playerSquares[index].classList.add('shadow');
        playerSquares[index + 10].classList.add('shadow');
        playerSquares[index + 20].classList.add('shadow');
        playerSquares[index + 30].classList.add('shadow');
        playerSquares[index + 40].classList.add('shadow');
      }
    });
  })

  playerSquares.forEach((square, index) => {
    square.addEventListener('mouseout', () => {
      if (cursorDirection === 'x') {
        playerSquares[index].classList.remove('shadow');
        playerSquares[index + 1].classList.remove('shadow');
        playerSquares[index + 2].classList.remove('shadow');
        playerSquares[index + 3].classList.remove('shadow');
        playerSquares[index + 4].classList.remove('shadow');
      } else {
        playerSquares[index].classList.remove('shadow');
        playerSquares[index + 10].classList.remove('shadow');
        playerSquares[index + 20].classList.remove('shadow');
        playerSquares[index + 30].classList.remove('shadow');
        playerSquares[index + 40].classList.remove('shadow');
      }
    });
  })

  playerSquares.forEach((square) => {
    square.addEventListener('click', (e) => {
      const squareNumber = e.target.id.slice(7);
      const stringCoordinates = squareNumber.split('');
      const numCoordinates = stringCoordinates.map((el) => parseInt(el));
      gameboard1.place(carrier1, numCoordinates, cursorDirection);
      gameboard1.renderGameboard();
    })
  })
}

placePlayerShips()



// const getShipSquareIndices = (gameboard) => {
//   const shipSquareIndices = [];
//   for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++){
//       if (gameboard.grid[i][j].ship) {
//         shipSquareIndices.push([i,j]);
//       }
//     }
//   }
//   return shipSquareIndices;
// }

// const renderBoard = (shipSquareIndices) => {
//   for (let index of shipSquareIndices) {
//     const indexNumber = parseInt(index.join(''));
//     const squareElement = document.querySelector(`#computer-square-${indexNumber}`);
//     squareElement.style.background = 'white';
//   }
// }

// renderBoard(getShipSquareIndices(gameboard2));