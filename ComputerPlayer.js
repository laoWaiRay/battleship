const ComputerPlayer = (name, gameboard, shipList) => {

  const findAttackableSquareCoordinates = (player) => {
    const attackableSquareCoordinates = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (player.gameboard.grid[i][j].isHit === null) attackableSquareCoordinates.push([i, j]);
      }
    }
    return attackableSquareCoordinates;
  }

  const chooseRandomElement = (array) => {
    const randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];
  }

  const attackRandom = (player) => {
    const attackableSquareCoordinates = findAttackableSquareCoordinates(player);
    const randSquareCoordinates = chooseRandomElement(attackableSquareCoordinates);
    player.gameboard.receiveAttack(randSquareCoordinates, player.shipList);
    console.log(`${player.name} was attacked by ${name}`);
    console.log(player.gameboard.grid);
  }

  return {
    name,
    gameboard,
    shipList,
    attackRandom
  }
}

export default ComputerPlayer