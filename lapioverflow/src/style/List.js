import styled from "styled-components";

export const Global = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const ListWrapper = styled.div`
    width: 50%;
    height: auto;
    box-shadow: 0px 2px 2px #8c8c8c;
    margin-top: 70px;
    & a{
        text-decoration: none;
    }
`
export const TestQ = styled.div`
    width: 100%;
    height: 200px;
    border-bottom: 3px solid rgba(0,0,0,0.33);
    cursor: pointer;
`

export const QContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px 0px 40px;
`

export const QName = styled.p`
    font-size: 24px;
    color: #616161;
    font-weight: 640;
`

export const QDate = styled.p`
    font-size: 0.9rem;
    color: #616161;
    margin-top: -10px;
`