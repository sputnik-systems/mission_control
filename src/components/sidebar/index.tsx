import {SidebarContainer, SidebarWrapper} from "./styled";
import React from "react";
import Menu from "./menu";

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <SidebarContainer>
                <h2 style={{textAlign: "center", marginBottom: "50px"}}>Sputnik<br/>Mission Control</h2>
                <Menu/>
            </SidebarContainer>
        </SidebarWrapper>
    )
}

export default Sidebar