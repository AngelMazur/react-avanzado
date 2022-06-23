import styled from "styled-components"
import { fadeIn } from '../style/animation'
export const List = styled.ul`
padding: 0;
display: flex;
justify-content: center;
margin-bottom: 20px;
width: 100%;
&.fixed {
  ${fadeIn()}
  background: #fff;
  border-radius: 60px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  padding: 5px;
  position: fixed;
  right: 0;
  top: -10px;
  transform: scale(.5);
  z-index:1;
}
`

export const Item = styled.li`
padding: 0 2px;
&.fixed{
  width: 80px;
}
`
