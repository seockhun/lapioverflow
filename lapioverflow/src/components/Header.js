import React from "react";
import * as S from "../style/Header.js";
import add from "../assets/add.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <S.Header>
                Lapioverflow
            </S.Header>
            <S.HeaderMenu>

                <NavLink to="/content">MAIN</NavLink>
                <NavLink to="/list">QUESTIONS</NavLink>

                <S.AddBtn>
                    <NavLink to="/write"><S.Plus src={add} onMouseOver={() => {

                    }} /></NavLink>
                </S.AddBtn>
            </S.HeaderMenu>
        </>
    );
}

export default Header;
