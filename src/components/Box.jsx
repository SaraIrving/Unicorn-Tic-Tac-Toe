import React from 'react'
import Corgi from './Corgi'
import Unicorn from './Unicorn'

export default function Box (props) {

  function handleBoxClick () {
    if (props.image === "U") {
      return <Unicorn/>
    } else if (props.image === "N") {
      return null;
    }
  }

  return (
  <button className="boxButton">{handleBoxClick()}</button>
  )




}