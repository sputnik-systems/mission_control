import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  gap: 10px;
  flex-flow: column;
  height: 100%;
  background-color: var(--baseColor);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: var(--borderRadius);
  padding: 15px;
  box-sizing: border-box;
`

export const CardHeader = styled.header`
    //height: 50px;
    //margin: 15px 15px 0 15px;
    color: var(--mainTextColor);
    font-size: 2rem;
    font-weight: bold;
`

export const CardContentWrapper = styled.div`
    flex-grow: 1;
    //padding-top: 10px;
`