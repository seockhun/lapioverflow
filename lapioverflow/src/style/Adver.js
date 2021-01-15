import styled from 'styled-components';


export const AdSection = styled.div`
    width: 60%;
    height: 220px;
    box-shadow: 0px 1px 3px #808080;
    margin-top: 80px;
    display: flex;
`

export const AdVideo = styled.div`
    width: 220px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(185, 219, 217);
`

export const Play = styled.img`
    width: 36px;
    height: 36px;
`

export const Explain = styled.div`
    width: 100vh;
    height: 200px;
    display: flex;
    flex-direction: column; 
`

export const Question = styled.div`
    width: 100%;
    height: 80%;
    border-bottom: 1px solid #d6d6d6;
`
export const Menu = styled.img`
    float: right;
    margin: 20px;
    width: 17px;
    height: 17px;
    cursor: pointer;
    padding: 6px;
    &:hover{
        background: #d6d6d6c7;
        border-radius: 50%;
    }
`

export const Title = styled.p`
    font-size: 1.7rem;
    color: #616161;
    margin: 0;
    margin-left: 30px;
    margin-top: 30px;
`

export const Content = styled.p`
    font-size: 0.9rem;  
    color: #0000008a;
    margin-top: 30px;
    margin-left: 30px;
`

export const GoLink = styled.a`
    text-decoration: none;
    color: rgb(82, 185, 209);
    margin: 20px 0px 0px 40px;
`