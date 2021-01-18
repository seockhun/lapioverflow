import React from "react";
import * as S from "../style/QDetail.js";

function Answer() {
    return (
        <S.Answer>
            <S.AnsCount>3 Answers</S.AnsCount>
            <S.AnsContent>
                <S.TestAns>
                    <S.AnswerCon>테스트를 위한 답변글 입니다.</S.AnswerCon>
                </S.TestAns>
                <S.TestAns>
                    <S.AnswerCon>테스트를 위한 답변글 입니다.</S.AnswerCon>
                </S.TestAns>
                <S.TestAns>
                    <S.AnswerCon>테스트를 위한 답변글 입니다.</S.AnswerCon>
                </S.TestAns>
            </S.AnsContent>
        </S.Answer>
    )
}

export default Answer;