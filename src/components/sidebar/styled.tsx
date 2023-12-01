import styled from "styled-components";

export const SidebarWrapper = styled.div`
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: var(--sidebarWidth); /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  display: flex;
`

export const SidebarContainer = styled.div`
  background-color: var(--baseColor);
  
  color: var(--mainTextColor);
  flex-grow: 1;
  margin: 10px;
  padding-left: 15px;
  border-radius: 25px;
`