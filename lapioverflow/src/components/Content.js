import React from "react";
import Adver from "./Adver.js";
import Study from "./Study.js";
import * as S from "../style/Content.js";

function Content() {
    return (
        <S.Content>
            <Study />
            <Adver />
        </S.Content>
    );
}

export default Content;
