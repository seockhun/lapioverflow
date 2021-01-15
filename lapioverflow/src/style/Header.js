import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: 120px;
    background: rgb(96, 64, 176);
    color: white;
    font-size: 3rem;
    align-items: center;
    text-indent: 50px;
`

export const HeaderMenu = styled.section`
    width: 100%;
    height: 50px;
    background: rgb(75, 51, 162);
    display: flex;
    align-items: center;
    & a{
        display: block;
        text-decoration: none;
        height:100%;
        color: white;
        padding: 0 10px;
        background: none;
        border: none;
        outline: none;
        font-weight: bold;
        margin-left: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover{
            background: #c3c3c3a3;
        }
        &:active{
            background: #c3c3c370;
        }
    }
`



export const AddBtn = styled.button`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: none;
    background: rgb(255,64,129);
    outline: none;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    margin-right: 40px;
    margin-top: 45px;
    &:hover{

    }
`

export const Plus = styled.img`
    width: 14px;
    height: 14px;
`
