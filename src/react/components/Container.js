import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Verdana";
  font-size: large;
  background-color: #4618ac;
  color: white;
  
  a{
    color: white;
    text-decoration: none;
  }
  a, input, button, select, option{
    font-family: "Bahnschrift";
    font-size: medium;
  }
`