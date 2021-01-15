import React from 'react';
import * as S from '../style/Adver.js';
import Navbar from "../assets/navbar.png";
import Play from "../assets/play.png";

function Adver() {
    return (
        <S.AdSection>
            <S.AdVideo>
                <S.Play src={Play}></S.Play>
            </S.AdVideo>
            <S.Explain>
                <S.Question>
                    <S.Menu src={Navbar}></S.Menu>
                    <S.Title>Question</S.Title>
                    <S.Content>지금까지 있었던 질문들과 답변들을 확인할 수 있습니다. 위의 탭바를 통해 확인하세요!</S.Content>
                </S.Question>
                <S.GoLink>가장 최근 질문 보기</S.GoLink>
            </S.Explain>
        </S.AdSection>
    );
}

export default Adver;