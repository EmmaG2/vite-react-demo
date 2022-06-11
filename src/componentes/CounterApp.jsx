import React, { useState } from 'react'

export const CounterApp = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20
  });

  const {counter1, counter2} = state;

  return (
    <>
      <h1 className='Tittle'>Counter {counter1} </h1>
      <h1 className='Tittle'>Counter {counter2} </h1>
      <hr />

      <button
      className='Button'
      onClick={() => {
        setState({
          ...state,
          counter1: counter1 + 1
        })
      }}>
        +1
      </button>
    </>
  )
}
