import styled from "styled-components";

export const Header = styled.header`
    height: 50px;
    margin: 10px;
    padding: 10px;
    background: var(--baseColor);
    border-radius: var(--borderRadius);
    
    display: flex;
    align-content: center;
    justify-content: end;
    & > * {
      margin-left: 10px
    }
`
export const Button = styled.button`
    padding: 0 10px 0 10px ;
  
    background-color: var(--bgColor);
    
    border-radius: var(--borderRadius);
    border: var(--purple) 2px solid;
    
    color: var(--mainTextColor);
    font-weight: bold;
    font-size: 1em;
`