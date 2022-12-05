import React from "react";
import "./style.css";
import Box from './Box';

import boxes from './boxes';

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares(prevSquare => {
      const newSquares = [];
      for(let i = 0; i < prevSquare.length; i++) {
        const currentSquare = prevSquare[i];
        if(currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: currentSquare.on ? false : true
          }
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    })
  }

  const squareElements = squares.map(square => {
    return <Box
    key={square.id}
    on={square.on}
    id={square.id}
    toggle={toggle}
    />
  })
  return (
    <div>
      {squareElements}
    </div>
  );
}
