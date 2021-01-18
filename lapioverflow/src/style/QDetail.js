import styled from "styled-components";

export const Global = styled.div`
    background: rgb(245, 245, 245);
    height: 100%;
`
export const Header = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & a{
        font-size: 20px;
        font-weight: 450;
        margin-left: 20px;
        text-decoration: none;
        color: black;
    }
`

export const Search = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 20px;
`

export const Main = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    z-index: -2;
    justify-content:center;
`

export const Blue = styled.div`
    width: 100%;
    height: 300px;
    position: absolute;
    z-index: 0 ;
    background: #3F51B5 !important;
`

export const QContent = styled.div`
    width: 65%;
    height: 350px;
    background: white;
    margin-top: 50px;
    box-shadow: 0px 4px 14px gray;
    position: relative;
`

export const Question = styled.div`
    margin: 80px 0px 0px 50px;
`

export const Category = styled.p`
    font-size: 14px;
    color:#9e9e9e;
    
`

export const QTitle = styled.p`
    font-size: 34px;
    color:#424242;
    font-weight: 400;
`

export const QSentence = styled.p`
    font-size: 14px;
    color: #424242;
`

export const Answer = styled.section`
    width: 100%;

`

export const AnsCount = styled.p`
    font-size: 37px;
    margin-left: 240px;
    margin-top: 140px;
`

export const AnsContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
`

export const TestAns = styled.div`
    width: 65%;
    height: 200px;
    background: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 14px gray;
    margin-bottom: 110px;
`

export const AnswerCon = styled.p`
    color: #424242;
    font-size: 14px;
    margin-left: 50px;
`

export const Comment = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WriteCom = styled.p`

`

export const WriteSec = styled.textarea`

`