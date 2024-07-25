import React, { useState } from 'react';
import SudokuGrid from './components/SudokuGrid';
import ControlPanel from './components/ControlPanel';
import { validateGrid } from './utils/validation';
import { solveSudoku } from './utils/solver';
import './styles/App.css';

const App = () => {
  const initialGrid = Array.from({ length: 9 }, () => Array(9).fill(0));
  const [grid, setGrid] = useState(initialGrid);
  const [error, setError] = useState('');

  const handleChange = (row, col, value) => {
    const newGrid = grid.map((row) => [...row]);
    newGrid[row][col] = value === '' ? 0 : parseInt(value, 10);
    setGrid(newGrid);
  };

  const handleValidate = () => {
    if (validateGrid(grid)) {
      setError('');
    } else {
      setError('Invalid Sudoku Grid!');
    }
  };

  const handleSolve = () => {
    const solvedGrid = solveSudoku(grid);
    if (solvedGrid) {
      setGrid(solvedGrid);
      setError('');
    } else {
      setError('No solution found!');
    }
  };

  return (
    <div className="app">
      <h1>Sudoku Solver</h1>
      <SudokuGrid grid={grid} onChange={handleChange} />
      <ControlPanel onValidate={handleValidate} onSolve={handleSolve} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
