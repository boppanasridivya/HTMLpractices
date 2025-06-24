import React from 'react'
import Square from './Square'

const Board = () => {
  return (
    <div>
      <div className="board-section">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-section">
        <Square/>
        <Square/>
        <Square/>

      </div>
      <div className="board-section">
        <Square/>
        <Square/>
        <Square/>

      </div>
    </div>
  )
}

export default Board
