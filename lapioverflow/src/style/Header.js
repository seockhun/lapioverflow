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
    padding-left: 20px;
    align-items: center;
    & a{
        width: 114px;
        display: block;
        text-decoration: none;
        height:93%;
        color: white;
        justify-content: center;
        border-bottom: 3px solid rgb(75,51,162);
        background: none;
        outline: none;
        font-weight: bold;
        display: flex;
        align-items: center;
        cursor: pointer;
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
    & a{
        border: none;
    }
`

export const Plus = styled.img`
    width: 14px;
    height: 14px;
`
