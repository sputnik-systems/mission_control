import styled from "styled-components";

export const TooltipWrapper = styled.div`
      //visibility: hidden;
      position: absolute;
      z-index: 1;
      
      right: 0;
      top: 55px;
      
      padding: 0 ;
      overflow: hidden;    
  
      display: block;
    
      background-color: var(--bgColor);
    
      border-radius: var(--borderRadius);
      border: var(--purple) 2px solid;
    
      color: var(--mainTextColor);
      font-weight: bold;
      font-size: 1em;
`

export const DurationsTable = styled.ul`
      list-style: none;
      margin: 0;
      padding: 0;

      & > li:nth-child(even) {
        background-color: var(--baseColor);
      }
`

export const DurationsRow = styled.li<{selected: boolean}>`
    align-content: start;
    padding: 10px;
    white-space: nowrap;
  
    color: ${ props => props.selected ? "var(--mainTextColor)" : "var(--secondaryTextColor)"};
    
    &:hover{
      color: var(--mainTextColor);
    }
  
    background-color: var(--bgColor)
`