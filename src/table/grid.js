export const createGrid = (table) => {
  const grid = [];
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      grid.push(
        <rect
          x={table[i][j].x}
          y={table[i][j].y}
          width="100"
          height="100"
          fill="transparent"
          stroke="black"
          strokeWidth="1"
        />
      );
    }
  }

  return grid;
};
