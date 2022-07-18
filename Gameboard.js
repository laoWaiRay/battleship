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
          grid[startingYPosition][startingXPosition + i] = 1;
        }
      } else {
        for (let i = 0; i < ship.size; i++) {
          grid[startingYPosition + i][startingXPosition] = 1;
        }
      }
    } else {
      if (direction === 'x') {
        const distanceToEdge = 9 - startingXPosition;
        const remainingSpotsToPlace = ship.size - (distanceToEdge + 1);
        for (let i = 0; i <= distanceToEdge; i++) {
          grid[startingYPosition][startingXPosition + i] = 1;
        }
        for (let j = 1; j <= remainingSpotsToPlace; j++) {
          grid[startingYPosition][startingXPosition - j] = 1;
        }
      } else {
        const distanceToEdge = 9 - startingYPosition;
        const remainingSpotsToPlace = ship.size - (distanceToEdge + 1);
        for (let i = 0; i <= distanceToEdge; i++) {
          grid[startingYPosition + i][startingXPosition] = 1;
        }
        for (let j = 1; j <= remainingSpotsToPlace; j++) {
          grid[startingYPosition - j][startingXPosition] = 1;
        }
      }
    }
    return grid;
  }

  return {
    grid,
    place
  }
}

module.exports = Gameboard;