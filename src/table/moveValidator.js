const getNeighbours = (table, rowIndex, columnIndex) => {
  console.log({ rowIndex, columnIndex });
  const neighbours = {};
  // check if cell has top neighbour
  if (rowIndex === 0) {
    neighbours.top = null;
  }
  if (rowIndex === table.length - 1) {
    neighbours.bottom = null;
  }
  if (columnIndex === 0) {
    neighbours.left = null;
  }
  if (columnIndex === table[rowIndex].length - 1) {
    neighbours.right = null;
  }

  if (neighbours.top !== null) {
    neighbours.top = table[rowIndex - 1][columnIndex].card || null;
  }
  if (neighbours.bottom !== null) {
    neighbours.bottom = table[rowIndex + 1][columnIndex].card || null;
  }
  if (neighbours.left !== null) {
    neighbours.left = table[rowIndex][columnIndex - 1].card || null;
  }
  if (neighbours.right !== null) {
    neighbours.right = table[rowIndex][columnIndex + 1].card || null;
  }

  return neighbours;
};

export const isMoveValid = (table, rowIndex, columnIndex) => {
  // if a card already exists on that place
  if (table[rowIndex][columnIndex].card) {
    return false;
  }
  const neighbours = getNeighbours(table, rowIndex, columnIndex);
  // check if it is next to any other cards
  if (
    Object.keys(neighbours).every((neighbour) => neighbours[neighbour] === null)
  ) {
    return false;
  }

  // TODO: check sides
  
  return true;
};
