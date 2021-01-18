import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "../style/QDetail.js";
import search from "../assets/search.png";
import Answer from "./Answer.js";
import Comment from "./Comment.js";

function Qdetail() {
    return (
        <S.Global>
            <S.Header>
                <NavLink to="/content">Lapioverflow</NavLink>
                <S.Search src={search}></S.Search>
            </S.Header>
            <S.Main>
                <S.Blue></S.Blue>
                <S.QContent>
                    <S.Question>
                        <S.Category>테스트 질문</S.Category>
                        <S.QTitle>테스트 질문</S.QTitle>
                        <S.QSentence>테스트를 위한 <bold>질문글</bold> 입니다.</S.QSentence>
                    </S.Question>
                </S.QContent>
            </S.Main>
            <Answer />
            <Comment />
        </S.Global>
    );
}

export default Qdetail;