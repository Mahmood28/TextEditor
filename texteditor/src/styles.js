import styled from "styled-components";

export const Page = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: inline-block;
`;

export const Button = styled.button`
  font-size: 30px;
  text-align: center;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  &:active {
    background-color: blue;
    color: white;
  }
`;

export const Text = styled.input`
  padding: 10rem;
  margin: 1rem auto;
  width: 40%;
  font-size: 30px;
  text-align: left;
`;

export const Color = styled.button`
  border: 1px outset blue;
  height: 50px;
  width: 50px;
  cursor: pointer;
  &:active {
    border-width: 10px;
    border-color: black;
    color: white;
  }
  &.blue {
    background-color: blue;
    color: white;
  }
  &.red {
    background-color: red;
    color: white;
  }
  &.yellow {
    background-color: yellow;
    color: white;
  }
  &.green {
    background-color: green;
    color: white;
  }
  &.pink {
    background-color: pink;
    color: white;
  }
`;
