const Player = (name, gameboard, shipList) => {

  const attack = (player, coordinates) => {
    player.gameboard.receiveAttack(coordinates, player.shipList);
    console.log(`${player.name} was attacked by ${name}`);
  } 

  return {
    name,
    gameboard,
    shipList,
    attack
  }
}

export default Player