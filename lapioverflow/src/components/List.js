import React from "react";
import * as S from "../style/List.js";
import Question from "./Question.js";
import Header from "./Header.js";
import { NavLink } from "react-router-dom";

function List() {
    return (
        <>
            <Header />
            <S.Global>
                <S.ListWrapper>
                    <NavLink to="/detail"><Question /></NavLink>
                    <NavLink to="/detail"><Question /></NavLink>
                    <NavLink to="/detail"><Question /></NavLink>
                    <NavLink to="/detail"><Question /></NavLink>
                    <NavLink to="/detail"><Question /></NavLink>
                </S.ListWrapper>
            </S.Global>
        </>
    );
}

export default List;

