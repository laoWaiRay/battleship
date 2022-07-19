const Gameboard = () => {
  const grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

  grid.forEach((row, index) => {
    row.forEach((square, index) => {
      row[index] = { ship: null, isHit: null};
    })
  })

  const isCloseToEdge = (ship, startPosition, direction) => {
    const startingYPosition = startPosition[0];
    const startingXPosition = startPosition[1];
    if (startingXPosition + ship.size > 10 && direction === 'x') return true
    else if (startingYPosition + ship.size > 10 && direction === 'y') return true
    else return false;
  }
  
  const place = (ship, startPosition, direction) => {
    const startingYPosition = startPosition[0];
    const startingXPosition = startPosition[1];

    if(!isCloseToEdge(ship, startPosition, direction)){
      if (direction === 'x') {
        for (let i = 0; i < ship.size; i++) {
          grid[startingYPosition][startingXPosition + i].ship = ship.name;
        }
      } else {
        for (let i = 0; i < ship.size; i++) {
          grid[startingYPosition + i][startingXPosition].ship = ship.name;
        }
      }
    } else {
      if (direction === 'x') {
        const distanceToEdge = 9 - startingXPosition;
        const remainingSpotsToPlace = ship.size - (distanceToEdge + 1);
        for (let i = 0; i <= distanceToEdge; i++) {
          grid[startingYPosition][startingXPosition + i].ship = ship.name;
        }
        for (let j = 1; j <= remainingSpotsToPlace; j++) {
          grid[startingYPosition][startingXPosition - j].ship = ship.name;
        }
      } else {
        const distanceToEdge = 9 - startingYPosition;
        const remainingSpotsToPlace = ship.size - (distanceToEdge + 1);
        for (let i = 0; i <= distanceToEdge; i++) {
          grid[startingYPosition + i][startingXPosition].ship = ship.name;
        }
        for (let j = 1; j <= remainingSpotsToPlace; j++) {
          grid[startingYPosition - j][startingXPosition].ship = ship.name;
        }
      }
    }
    return grid;
  }

  const checkHit = (coordinates) => {
    if (grid[coordinates[0]][coordinates[1]].ship) return true
    else return false;
  }

  // return true if arrays contain the same values, otherwise return false
  const compareArray = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
    return true;
  }

  const receiveAttack = (coordinates, listOfShips) => {
    if (checkHit(coordinates) === true) {
      grid[coordinates[0]][coordinates[1]].isHit = true;
      const shipName = grid[coordinates[0]][coordinates[1]].ship;
      const coordinatesList = [];
      let indexOfHit;
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (grid[i][j].ship === shipName) coordinatesList.push([i,j]);
        }
      }
      for (let i = 0; i < coordinatesList.length; i++) {
        if (compareArray(coordinates, coordinatesList[i])) indexOfHit = i;
      }
      const ship = listOfShips.find(ship => ship.name === shipName);
      ship.hit(indexOfHit);
    } else {
      grid[coordinates[0]][coordinates[1]].isHit = false;
    }
  }

  const getShipSquares = () => {
    const shipSquares = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (grid[i][j].ship) shipSquares.push(grid[i][j]);
      }
    }
    return shipSquares;
  }

  const isGameOver = () => {
    const shipSquares = getShipSquares();
    let foundLiveShip;
    shipSquares.forEach((shipSquare) => {
      if (shipSquare.isHit === null) {
        foundLiveShip = true;
      }
    })
    if(foundLiveShip === true) return false
    else return true
  }

  const renderGameboard = (isComputerPlayer = false) => {
    if (isComputerPlayer === true) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++){
          // if (gameboard.grid[i][j].ship) {
          //   const squareElement = document.querySelector(`#computer-square-${i}${j}`);
          //   squareElement.style.background = 'white';
          // }
          if (grid[i][j].isHit === true) {
            const squareElement = document.querySelector(`#computer-square-${i}${j}`);
            squareElement.style.background = 'green';
          }
          if (grid[i][j].isHit === false) {
            const squareElement = document.querySelector(`#computer-square-${i}${j}`);
            squareElement.style.background = 'red';
          }
        }
      }
    } else {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++){
          if (grid[i][j].ship) {
            const squareElement = document.querySelector(`#square-${i}${j}`);
            squareElement.style.background = 'white';
          }
          if (grid[i][j].isHit === true) {
            const squareElement = document.querySelector(`#square-${i}${j}`);
            squareElement.style.background = 'green';
          }
          if (grid[i][j].isHit === false) {
            const squareElement = document.querySelector(`#square-${i}${j}`);
            squareElement.style.background = 'red';
          }
        }
      }
    }
  }

  return {
    grid,
    place,
    checkHit,
    receiveAttack,
    isGameOver,
    renderGameboard
  }
}

export default Gameboard