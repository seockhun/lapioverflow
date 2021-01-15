import React from "react";
import * as S from "../style/List.js";

function List() {
    return (
        <S.Global>
            <S.ListWrapper>
                <S.FirstQuestion></S.FirstQuestion>
                <S.SecondQuestion></S.SecondQuestion>
                <S.ThirdQuestion></S.ThirdQuestion>
                <S.ForthQuestion></S.ForthQuestion>
                <S.FifthQuestion></S.FifthQuestion>
            </S.ListWrapper>
        </S.Global>
    );
}

export default List;

