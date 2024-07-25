export const validateGrid = (grid) => {
    const isValid = (array) => {
      const seen = new Set();
      for (let num of array) {
        if (num !== 0) {
          if (seen.has(num)) {
            return false;
          }
          seen.add(num);
        }
      }
      return true;
    };
  
    for (let i = 0; i < 9; i++) {
      const row = grid[i];
      const col = grid.map(row => row[i]);
      if (!isValid(row) || !isValid(col)) {
        return false;
      }
    }
  
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        const subGrid = [];
        for (let k = 0; k < 3; k++) {
          for (let l = 0; l < 3; l++) {
            subGrid.push(grid[i + k][j + l]);
          }
        }
        if (!isValid(subGrid)) {
          return false;
        }
      }
    }
  
    return true;
  };
  