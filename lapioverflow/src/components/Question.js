import React from "react";
import * as S from "../style/List.js";

function Question() {
    return (
        <S.TestQ>
            <S.QContent>
                <S.QName>테스트 질문</S.QName>
                <S.QDate>2021년 1월 17일 11:50 오전</S.QDate>
            </S.QContent>
        </S.TestQ>
    );
}

export default Question;