import React from "react";
import Adver from "./Adver.js";
import Study from "./Study.js";
import Header from "./Header.js";
import * as S from "../style/Content.js";

function Content() {
    return (
        <>
            <Header />
            <S.Content>
                <Adver />
                <Study />
            </S.Content>
        </>
    );
}

export default Content;
