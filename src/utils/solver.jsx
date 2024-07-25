export const solveSudoku = (grid) => {
    const findEmptyPosition = () => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (grid[i][j] === 0) {
            return [i, j];
          }
        }
      }
      return null;
    };
  
    const isSafe = (num, row, col) => {
      for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num || grid[x][col] === num) {
          return false;
        }
      }
  
      const startRow = row - row % 3;
      const startCol = col - col % 3;
  
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[i + startRow][j + startCol] === num) {
            return false;
          }
        }
      }
  
      return true;
    };
  
    const solve = () => {
      const emptyPos = findEmptyPosition();
      if (!emptyPos) {
        return true;
      }
  
      const [row, col] = emptyPos;
  
      for (let num = 1; num <= 9; num++) {
        if (isSafe(num, row, col)) {
          grid[row][col] = num;
          if (solve()) {
            return true;
          }
          grid[row][col] = 0;
        }
      }
  
      return false;
    };
  
    if (solve()) {
      return grid;
    } else {
      return null;
    }
  };
  