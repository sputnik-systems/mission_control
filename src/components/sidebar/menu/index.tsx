import {MenuGrid} from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle, faCompass, faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Menu = () => {

    return (
        <MenuGrid>
            <FontAwesomeIcon style={{ height: '25px'}} icon={faUserCircle} />
            <span >
                    <text style={{ display: "inline-block", color: "var(--secondaryTextColor)", fontSize: "small"}}>Вы авторизованы как</text>
                    <text style={{fontSize:"large"}}> Человек Партнер</text>
            </span>
            <FontAwesomeIcon style={{ height: '25px'}} icon={faCompass} />
            <span>
                <a style={{fontSize:"large", textDecoration: "none", color: "var(--mainTextColor)",}} href={"/#"}> Контроль </a>
                <FontAwesomeIcon style={{ height: '15px'}} icon={faArrowUpRightFromSquare} />
            </span>
        </MenuGrid>
    )
}

export default Menu