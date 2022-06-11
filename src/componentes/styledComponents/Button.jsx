import styled from "styled-components";

const colorBlack = '#f00';

const backgroundColor = (props) => props.variant === 'white' ? '#FFF' : 'transparent'
const backgroundColorHover = (props) => props.variant !== 'white' ? '#FFF' : 'transparent'
const color = (props) => props.variant === 'white' ? '#000' : '#FFF'
const colorHover = (props) => props.variant !== 'white' ? '#000' : '#FFF'

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background-color: ${backgroundColor};
  color: ${color};
  border: 2px solid white;
  cursor: pointer;
  &:hover {
    background-color: ${backgroundColorHover};
    color: ${colorHover};
  }
`

export const FancyButton = styled(Button)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`

export const SubmitButton = styled(Button).attrs((props) => ({
  type: 'submit'
}))`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${backgroundColor};
    box-shadow: 0 5px #666;
    transform: translateY(4px)
  }
`

export const DarkButton = styled(Button)`
  border: 2px solid ${(props) => props?.theme.dark.primary};
  background-color: ${(props) => props?.theme.dark.primary};
  color: ${(props) => props?.theme.dark.text}
`