import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import blackOrWhite from '../../../utils/blackOrWhite';

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  &:nth-child(1) {
    margin-left: -40px;
  }
  `;

const Li = styled.li`
    list-style: none;
    color: ${({ theme }) => theme.color};
    height: 100px;
    width: 250px;
    background-color: ${({ theme }) => theme.bgColor};
    border: solid 2px #C0C0C0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.color};
  outline: none;
  opacity: 0.5;
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.color};
  font-size: 0.5em !important; /* user agent stylesheet reset */
  padding: 5px 5px;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 0.9;
  }
`;

const P = styled.p`
  font-size: 0.8em;
`;


const Container = ({ colorsBody, onRemoveColor }) => {

  const handleRemoveClick = (e) => {
    onRemoveColor(e.target.name);
  };
  return (<Ul>
    {
      colorsBody.map((colorBody, index) => {
        let color = colorBody.color;
        let id = colorBody
        const theme = {
          color: blackOrWhite(colorBody),
          bgColor: color
        };

        return (
          <ThemeProvider theme={theme}>
            <Li key={index}>
              <P>{color}</P>
              <Button onClick={handleRemoveClick} name={color} id={}>Delete The Color</Button>
            </Li>
          </ThemeProvider>)
      })
    }
  </Ul >
  );
}

export default Container;
