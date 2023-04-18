import styled from "styled-components";

export const Form = styled.form`
  background: ${({ bg }) => bg || "#fff"};
  padding: ${({ pd }) => pd || "5px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  color: ${({ color }) => color || "#fff"};
  border: 2px solid ${({ bd }) => bd || "none"};
  border-radius: ${({ br }) => br || "8px"};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
`;
export const Input = styled.input`
  background: ${({ bg }) => bg || "#fff"};
  padding: ${({ pd }) => pd || "5px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  color: ${({ color }) => color || "black"};
  border: 2px solid ${({ bd }) => bd || "black"};
  border-radius: ${({ br }) => br || "8px"};
  text-align: ${({ txAlign }) => txAlign || "center"};
`;
export const Label = styled.label`
  background: ${({ bg }) => bg || "#fff"};
  padding: ${({ pd }) => pd || "5px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  color: ${({ color }) => color || "black"};
  border: 2px solid ${({ bd }) => bd || "none"};
  border-radius: ${({ br }) => br || "8px"};
  font-family: ${({ fnFamily }) => fnFamily || "cursive"};
`;
export const Select = styled.select`
  background: ${({ bg }) => bg || "#fff"};
  padding: ${({ pd }) => pd || "5px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  color: ${({ color }) => color || "black"};
  border: 2px solid ${({ bd }) => bd || "black"};
  border-radius: ${({ br }) => br || "8px"};
  font-family: ${({ fnFamily }) => fnFamily || "cursive"};
`;
export const Option = styled.option``;
export const P = styled.p`
  background: ${({ bg }) => bg || "#fff"};
  padding: ${({ pd }) => pd || "5px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  color: ${({ color }) => color || "black"};
  border: 2px solid ${({ bd }) => bd || "none"};
  flex-wrap: ${({ flWr }) => flWr || "no-wrap"};
  border-radius: ${({ br }) => br || "8px"};
  font-family: ${({ fnFamily }) => fnFamily || "cursive"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
`;
export const Button = styled.button`
  background: ${({ bg }) => bg || "lightblue"};
  padding: ${({ pd }) => pd || "8px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  align-self: ${({ alSelf }) => alSelf || "none"}
  color: ${({ color }) => color || "#fff"};
  border: 2px solid ${({ bd }) => bd || "none"};
  border-radius: ${({ br }) => br || "8px"};
  cursor: ${({ cursor }) => cursor || "pointer"};
  transition: ${({ trans }) => trans || ".4s ease"};
  letter-spacing: ${({ letterSp }) => letterSp || "2px"};
  font-family: ${({ fnFamily }) => fnFamily || "cursive"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
  margin-top: ${({ mt }) => mt || "none"};
  &:hover {
    background: ${({ _hovBg, bg }) => _hovBg || bg};
    color: ${({ _hovCol, color }) => _hovCol || color};
  }
`;
export const Div = styled.div`
  background: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "black"};
  padding: ${({ pd }) => pd || "0px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  border: 2px solid ${({ bd }) => bd || "none"};
  border-radius: ${({ br }) => br || "8px"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  flex-wrap: ${({ flWr }) => flWr || "no-wrap"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  align-self: ${({ alSelf }) => alSelf || "none"};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  box-shadow: ${({ boxSh }) => boxSh || "none"};
  background-image: url(${({ img }) => img || "none"});
  transition: ${({ trans }) => trans || ".4s ease"};
  position: ${({ pos }) => pos || "static"};
  top: ${({ posTop }) => posTop};
  background-repeat: no-repeat;
  background-size: contain;
  backdrop-filter: ${({ blur }) => blur || "none"};

  Span {
    display: ${({ dis }) => dis || "inline"};
    transition: background 0.6s;
  }
  &:hover {
    background: ${({ _hovBg, bg }) => _hovBg || bg};
    color: ${({ _hovCol, color }) => _hovCol || color};

    Span {
      transition: 0.6s;
      display: ${({ _hovSpanDis }) => _hovSpanDis};
      justify-content: center;
      position: absolute;
      width: 180px;
      font-family: cursive;
      transform: translate(100px, -10px);
      font-size: 18px;
      top: 30px;
      font-weight: 700;
    }
  }
`;
export const Span = styled.span`
  background: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "black"};
  padding: ${({ pd }) => pd || "0px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  border: 2px solid ${({ bd }) => bd || "none"};
  border-radius: ${({ br }) => br || "8px"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  flex-wrap: ${({ flWr }) => flWr || "no-wrap"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  align-self: ${({ alSelf }) => alSelf || "none"};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  box-shadow: ${({ boxSh }) => boxSh || "none"};
  background-image: url(${({ img }) => img || "none"});
  transition: ${({ trans }) => trans || ".4s ease"};
  // position: ${({ pos }) => pos || "static"};
  // top: 0px;
  background-repeat: no-repeat;
  background-size: contain;
  backdrop-filter: ${({ blur }) => blur || "none"};
`;
export const DivGradient = styled.div`
  padding: ${({ pd }) => pd || "5px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  color: ${({ color }) => color || "black"};
  border: 2px solid ${({ bd }) => bd || "none"};
  border-radius: ${({ br }) => br || "8px"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  flex-wrap: ${({ flWr }) => flWr || "no-wrap"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  background-image: url(${({ img }) => img || "none"});
  background-repeat: no-repeat;
  background-size: contain;
  background: radial-gradient(
    ${({ bgGR1 }) => bgGR1 || "none"} 60%,
    ${({ bgGR2 }) => bgGR2 || "none"} 100%
  );
  box-shadow: ${({ boxSh }) => boxSh || "none"};
`;
export const H1 = styled.h1`
  background: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#161616"};
  border: 2px solid ${({ bd }) => bd || "none"};
  border-radius: ${({ br }) => br || "8px"};
  font-size: ${({ fSize }) => fSize || "30px"};
  padding: ${({ pd }) => pd || "8px"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  font-family: ${({ fnFamily }) => fnFamily || "cursive"};
  align-self: ${({ alSelf }) => alSelf || "none"};
`;
export const Img = styled.img`
  height: ${({ hg }) => hg || "12rem"};
  width: ${({ wd }) => wd || "12rem"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  border-radius: ${({ br }) => br || "none"};
  padding: ${({ pd }) => pd || "none"};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  align-self: ${({ alSelf }) => alSelf || "none"};
  cursor: pointer;
`;
