const Ship = (size, name) => {
  // closure !
  let positions = [];
  for (let i = 0; i < size; i++) {
    positions.push(0);
  }
  const hit = (positionIndex) => {
    positions[positionIndex] = 1;
  }
  const isSunk = () => {
    if (positions.includes(0)) return false
    else return true;
  }

  return {
    size,
    name,
    positions,
    hit,
    isSunk
  }
}

module.exports = Ship;