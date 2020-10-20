import React from 'react'
import Box from './Box'

export default function GameBoard (props) {

  let boardArray = [["U", "U", "N"], ["N", "N", "N"], ["N", "N", "N"]]
  let noNestArray = ["U", "N", "N", "N", "N", "N", "N", "N", "N"];

  return (
    <div className="gameBoardWrapper">
      {noNestArray.map(box => {
        if (box === "U") {
          return (<Box image="U"></Box>)
        } else if (box === "N") {
          return (<Box image="N"></Box>)
        }
        return (<p>A ROW!</p>)
       
    })}
    </div>
  )


}