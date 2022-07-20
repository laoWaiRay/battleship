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

const isCloseToEdge = (shipLength, index) => {
  if (cursorDirection === 'x') {
    let horizontalIndex;
    if (index < 10) {
      horizontalIndex = index;
    } else {
      horizontalIndex = parseInt(index.toString().slice(1));
    }
    if (horizontalIndex + shipLength > 10) return true;
      else return false;
  } else {
    let verticalIndex;
    if (index < 10) {
      verticalIndex = 0;
    } else {
      verticalIndex = parseInt(index.toString().slice(0,1));
    }
    if (verticalIndex + shipLength > 10) return true;
      else return false;
  }
}

const distanceToEdge = (index) => {
  if (cursorDirection === 'x') {
    let horizontalIndex;
    if (index < 10) {
      horizontalIndex = index;
    } else {
      horizontalIndex = parseInt(index.toString().slice(1));
    }
    return 9 - horizontalIndex;
  } else {
    let verticalIndex;
    if (index < 10) {
      verticalIndex = 0;
    } else {
      verticalIndex = parseInt(index.toString().slice(0,1));
    }
    return 9 - verticalIndex;
  }
}

const placePlayerShips = () => {
  console.log('Place your Carrier');
  let shipLength = 5;
  
  playerSquares.forEach((square, index) => {
    square.addEventListener('mouseover', () => {
      if(!(isCloseToEdge(shipLength, index))) {
        if (cursorDirection === 'x') {
          for (let i = 0; i < shipLength; i++) {         
            playerSquares[index + i].classList.add('shadow');
          }
        } else {
          for (let i = 0; i < shipLength; i++) {
            playerSquares[index + (i * 10)].classList.add('shadow');
          }
        }
      } else {
        // Edge case
        if (cursorDirection === 'x') {
          for (let i = 0; i < distanceToEdge(index) + 1; i++) {         
            playerSquares[index + i].classList.add('shadow');
          }
          for (let j = 0; j <= shipLength - (distanceToEdge(index) + 1); j++) {
            playerSquares[index - j].classList.add('shadow');
          }
        } else {
          for (let i = 0; i < distanceToEdge(index) + 1; i++) {
            playerSquares[index + (i * 10)].classList.add('shadow');
          }
          for (let j = 0; j <= shipLength - (distanceToEdge(index) + 1); j++) {
            playerSquares[index - (j * 10)].classList.add('shadow');
          }
        }
      } 
    });
  })

  playerSquares.forEach((square, index) => {
    square.addEventListener('mouseout', () => {
      if(!(isCloseToEdge(shipLength, index))) {
        if (cursorDirection === 'x') {
          for (let i = 0; i < shipLength; i++) {         
            playerSquares[index + i].classList.remove('shadow');
          }
        } else {
          for (let i = 0; i < shipLength; i++) {
            playerSquares[index + (i * 10)].classList.remove('shadow');
          }
        }
      } else {
        // Edge case
        if (cursorDirection === 'x') {
          for (let i = 0; i < distanceToEdge(index) + 1; i++) {         
            playerSquares[index + i].classList.remove('shadow');
          }
          for (let j = 0; j <= shipLength - (distanceToEdge(index) + 1); j++) {
            playerSquares[index - j].classList.remove('shadow');
          }
        } else {
          for (let i = 0; i < distanceToEdge(index) + 1; i++) {
            playerSquares[index + (i * 10)].classList.remove('shadow');
          }
          for (let j = 0; j <= shipLength - (distanceToEdge(index) + 1); j++) {
            playerSquares[index - (j * 10)].classList.remove('shadow');
          }
        }
      } 
    });
  })

  playerSquares.forEach((square, index) => {
    square.addEventListener('click', (e) => {
      const squareNumber = e.target.id.slice(7);
      const stringCoordinates = squareNumber.split('');
      const numCoordinates = stringCoordinates.map((el) => parseInt(el));
      
      gameboard1.place(carrier1, numCoordinates, cursorDirection);
      gameboard1.renderGameboard();
    });

    square.addEventListener('mouseover', (e) => {
      const squareNumber = e.target.id.slice(7);
      const stringCoordinates = squareNumber.split('');
      const numCoordinates = stringCoordinates.map((el) => parseInt(el));

      if(!(isCloseToEdge(shipLength, index))) {
        if (cursorDirection === 'x') {
          if (gameboard1.isValidPlacement(carrier1, numCoordinates, cursorDirection) === false) {
            for (let i = 0; i < shipLength; i++) {
              let squareElement;
              if (parseInt(squareNumber) < 10) {
                squareElement = document.querySelector(`#square-0${parseInt(squareNumber) + i}`)
              } else {
                squareElement = document.querySelector(`#square-${parseInt(squareNumber) + i}`)
              }
              squareElement.style.background = 'grey';
            }
          }
        } else {
          if (gameboard1.isValidPlacement(carrier1, numCoordinates, cursorDirection) === false) {
            for (let i = 0; i < shipLength; i++) {
              let squareElement;
              if (parseInt(squareNumber) < 10) {
                if (i === 0) {
                  squareElement = document.querySelector(`#square-0${parseInt(squareNumber) + (i * 10)}`)
                } else {
                  squareElement = document.querySelector(`#square-${parseInt(squareNumber) + (i * 10)}`)
                }
              } else {
                squareElement = document.querySelector(`#square-${parseInt(squareNumber) + (i * 10)}`)
              }
              squareElement.style.background = 'grey';
            }
          }
        }
      } else {
        // edge case
        if (cursorDirection === 'x') {
          if (gameboard1.isValidPlacement(carrier1, numCoordinates, cursorDirection) === false) {
            for (let i = 0; i < distanceToEdge(index) + 1; i++) {
              let squareElement;
              if (parseInt(squareNumber) < 10) {
                squareElement = document.querySelector(`#square-0${parseInt(squareNumber) + i}`)
              } else {
                squareElement = document.querySelector(`#square-${parseInt(squareNumber) + i}`)
              }
              squareElement.style.background = 'grey';
            }
            for (let j = 0; j <= shipLength - (distanceToEdge(index) + 1); j++) {
              let squareElement;
              if (parseInt(squareNumber) < 10) {
                squareElement = document.querySelector(`#square-0${parseInt(squareNumber) - j}`)
              } else {
                squareElement = document.querySelector(`#square-${parseInt(squareNumber) - j}`)
              }
              squareElement.style.background = 'grey';
            }
          }
        } else {
          if (gameboard1.isValidPlacement(carrier1, numCoordinates, cursorDirection) === false) {
            for (let i = 0; i < distanceToEdge(index) + 1; i++) {
              let squareElement;
              if (parseInt(squareNumber) < 10) {
                if (i === 0) {
                  squareElement = document.querySelector(`#square-0${parseInt(squareNumber) + (i * 10)}`)
                } else {
                  squareElement = document.querySelector(`#square-${parseInt(squareNumber) + (i * 10)}`)
                }
              } else {
                squareElement = document.querySelector(`#square-${parseInt(squareNumber) + (i * 10)}`)
              }
              squareElement.style.background = 'grey';
            }
            for (let j = 0; j <= shipLength - (distanceToEdge(index) + 1); j++) {
              let squareElement;
              if (parseInt(squareNumber) < 10) {
                if (j === 0) {
                  squareElement = document.querySelector(`#square-0${parseInt(squareNumber) - (j * 10)}`)
                } else {
                  squareElement = document.querySelector(`#square-${parseInt(squareNumber) - (j * 10)}`)
                }
              } else {
                squareElement = document.querySelector(`#square-${parseInt(squareNumber) - (j * 10)}`)
              }
              squareElement.style.background = 'grey';
            }
          }
        }
      }
    });

    square.addEventListener('mouseout', (e) => {
      const squareNumber = e.target.id.slice(7);
      const stringCoordinates = squareNumber.split('');
      const numCoordinates = stringCoordinates.map((el) => parseInt(el));

      if(!(isCloseToEdge(shipLength, index))) {
        if (cursorDirection === 'x') {
          if (gameboard1.isValidPlacement(carrier1, numCoordinates, cursorDirection) === false) {
            for (let i = 0; i < shipLength; i++) {
              let squareElement;
              if (parseInt(squareNumber) < 10) {
                squareElement = document.querySelector(`#square-0${parseInt(squareNumber) + i}`)
              } else {
                squareElement = document.querySelector(`#square-${parseInt(squareNumber) + i}`)
              }
              squareElement.style.background = '';
            }
          }
        } else {
          if (gameboard1.isValidPlacement(carrier1, numCoordinates, cursorDirection) === false) {
            for (let i = 0; i < shipLength; i++) {
              let squareElement;
              if (parseInt(squareNumber) < 10) {
                if (i === 0) {
                  squareElement = document.querySelector(`#square-0${parseInt(squareNumber) + (i * 10)}`)
                } else {
                  squareElement = document.querySelector(`#square-${parseInt(squareNumber) + (i * 10)}`)
                }
              } else {
                squareElement = document.querySelector(`#square-${parseInt(squareNumber) + (i * 10)}`)
              }
              squareElement.style.background = '';
            }
          }
        }
      } else {
        // edge case
        if (cursorDirection === 'x') {
          if (gameboard1.isValidPlacement(carrier1, numCoordinates, cursorDirection) === false) {
            for (let i = 0; i < distanceToEdge(index) + 1; i++) {
              let squareElement;
              if (parseInt(squareNumber) < 10) {
                squareElement = document.querySelector(`#square-0${parseInt(squareNumber) + i}`)
              } else {
                squareElement = document.querySelector(`#square-${parseInt(squareNumber) + i}`)
              }
              squareElement.style.background = '';
            }
            for (let j = 0; j <= shipLength - (distanceToEdge(index) + 1); j++) {
              let squareElement;
              if (parseInt(squareNumber) < 10) {
                squareElement = document.querySelector(`#square-0${parseInt(squareNumber) - j}`)
              } else {
                squareElement = document.querySelector(`#square-${parseInt(squareNumber) - j}`)
              }
              squareElement.style.background = '';
            }
          }
        } else {
          if (gameboard1.isValidPlacement(carrier1, numCoordinates, cursorDirection) === false) {
            for (let i = 0; i < distanceToEdge(index) + 1; i++) {
              let squareElement;
              if (parseInt(squareNumber) < 10) {
                if (i === 0) {
                  squareElement = document.querySelector(`#square-0${parseInt(squareNumber) + (i * 10)}`)
                } else {
                  squareElement = document.querySelector(`#square-${parseInt(squareNumber) + (i * 10)}`)
                }
              } else {
                squareElement = document.querySelector(`#square-${parseInt(squareNumber) + (i * 10)}`)
              }
              squareElement.style.background = '';
            }
            for (let j = 0; j <= shipLength - (distanceToEdge(index) + 1); j++) {
              let squareElement;
              if (parseInt(squareNumber) < 10) {
                if (j === 0) {
                  squareElement = document.querySelector(`#square-0${parseInt(squareNumber) - (j * 10)}`)
                } else {
                  squareElement = document.querySelector(`#square-${parseInt(squareNumber) - (j * 10)}`)
                }
              } else {
                squareElement = document.querySelector(`#square-${parseInt(squareNumber) - (j * 10)}`)
              }
              squareElement.style.background = '';
            }
          }
        }
      }
    });
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