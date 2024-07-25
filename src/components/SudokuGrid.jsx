import React from 'react';
import './SudokuGrid.css';

const SudokuGrid = ({ grid, onChange }) => {
  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <input
              key={colIndex}
              type="text"
              maxLength="1"
              value={cell !== 0 ? cell : ''}
              onChange={(e) => onChange(rowIndex, colIndex, e.target.value)}
              className="sudoku-cell"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;
