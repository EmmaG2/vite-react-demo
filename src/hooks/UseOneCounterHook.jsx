import React from 'react'

import { ThemeProvider } from 'styled-components'
import { useCouter } from './useCouter'

import { Button, DarkButton, FancyButton, SubmitButton } from '../componentes/styledComponents/Button'
import { Tittle } from '../componentes/styledComponents/Tittle'


export const UseOneCounterHook = () => {

  const theme = {
    dark: {
      primary: '#000',
      text: '#FFF'
    },
    light: {
      primary: '#FFF',
      text: '#000'
    }
  }

  const { state, increment, decrement, reset } = useCouter(0);

  return (
    <ThemeProvider theme={theme}>
      <Tittle>Use Counter Hook: {state}</Tittle>
      <hr />

      <Button onClick={() => increment(1)}> + 1</Button>
      <Button variant='white' onClick={() => reset()}>Reset</Button>
      <Button onClick={() => decrement(1)}> - 1</Button>

      <FancyButton as='button'>Hola</FancyButton>

      <SubmitButton>submit</SubmitButton>

      <DarkButton>Hola Dark</DarkButton>
    </ThemeProvider>
  )
}
