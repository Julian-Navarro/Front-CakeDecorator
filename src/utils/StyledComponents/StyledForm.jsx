import styled from "styled-components";

export const DivContainer = styled.div`
    // background: green;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Div = styled.div`
    // background: gray;
    display: flex;
    flex-direction: column;
    width: 20rem;
    justify-content: space-between;
`
export const Form = styled.form`
    background: #ffff;
    width: 25rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 44rem;
    padding: 30px 0 20px 0;
    border: 1px solid #0172AF

`
export const FormInput = styled.input`
    border: 2px solid ${(props)=>props.color};
    border-radius: 6px;
    color: #161616;
    font-size: 20px;
    height: 1.8rem;
    margin-top: 5px;
    letter-spacing: 1px;

`
export const Label = styled.label`
    font-size: 20px;
    font-family: cursive;
    color: #0172AF;
    letter-spacing: 2px;

`
export const Select = styled.select`
    font-size: 20px;
    color: #0172AF;
    height: 1.8rem;
    border: 2px solid ${({color})=>color};
    letter-spacing: 2px;

`
export const Option = styled.option`
    
`
export const PDanger = styled.p`
    color: red;
    border: 1px solid red;
    border-radius: 4px;
    padding: 0 20px 0 20px;
    width: 85%;
    letter-spacing: 2px;



`
export const Button = styled.button`
    border: none;
    background: ${({bgColor})=>bgColor || "gray"};
    color: ${({color})=>color || "#fff"};
    width: 10rem;
    padding: 5px;
    font-size: 22px;
    border-radius: 6px;
    cursor: pointer;
    transition: .3s;
    letter-spacing: 2px;
    &:hover{
        background: black
    }

`
export const DivButtons = styled.div`
    // background: yellow;
    width: 100%;
    display: flex;
    justify-content: space-around
`
export const H1 = styled.h1`    
    background: ${({bg})=>bg || "#fff"};
    color: ${({color})=>color || "#161616"};
    font-size: ${({fSize})=>fSize || "30px"};
    padding: ${({pd})=>pd || "5px"};
    display: ${({display})=>display || "flex"};
    flex-direction: ${({flexDir})=>flexDir || "row"};
    justify-content: ${({jfCont})=>jfCont || "center"};
    align-items: ${({alItems})=>alItems || "center"};
    heigth: ${({hg})=>hg || "auto"};
    font-family: ${({fnFamily})=>fnFamily || "cursive"}

`