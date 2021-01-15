import React, { Component, useEffect, useState } from "react";
import * as S from "../style/Header.js";
import add from "../assets/add.png";
import { Content } from "../style/Adver.js";
import { Link, NavLink } from "react-router-dom"

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
                    <S.Plus src={add}></S.Plus>
                </S.AddBtn>
            </S.HeaderMenu>
        </>
    );
}

export default Header;
