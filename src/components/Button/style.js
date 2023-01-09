import styled from "styled-components";
import { Theme } from "App/theme";

const Button = styled.button`
  background: #fff;//${(props) => props.bgcolor.background}; 
  color: ${Theme.mainColor};//${(props) => props.bgcolor.color}; //#a9a9a9;
  border: 1px solid ${(props) => props.bgcolor.background};//#e4e4e4;
  cursor: pointer;
  display: inline-block;
  position: relative;
  padding: 0 20px;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  min-width: 120px;
  letter-spacing: 0;
  text-transform: none;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.4s ease;
  font-family: "Rubik", sans-serif;
  box-shadow: 0 0 2px rgb(0 0 0 / 45%);
  :hover,
  :focus {
    background:  ${Theme.mainColor};
    color:#fff; 
    border: none;// border: 1px solid ${Theme.mainColor};
    outline: none;    
    .txt,
    .anticon {
      color: #fff;
    }
  }
`;

export { Button };
