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
  font-family: ${({ fnFamily }) => fnFamily || "cursive"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
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
  font-family: ${({ fnFamily }) => fnFamily || "cursive"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
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
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
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
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
`;
export const Option = styled.option``;
export const P = styled.p`
  background: ${({ bg }) => bg || "transparent"};
  padding: ${({ pd }) => pd || "5px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  align-self: ${({ alSelf }) => alSelf || "none"};
  color: ${({ color }) => color || "black"};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  flex-wrap: ${({ flWr }) => flWr || "no-wrap"};
  border-radius: ${({ br }) => br || "8px"};
  font-family: ${({ fnFamily }) => fnFamily || "cursive"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
  cursor: ${({ cursor }) => cursor || "pointer"};
  &:hover {
    background: ${({ _hovBg, bg }) => _hovBg || bg};
    color: ${({ _hovCol }) => _hovCol};
    box-shadow: ${({ _hovBSh }) => _hovBSh};
    text-shadow: ${({ txtSh }) =>
      `1px 1px 1px ${txtSh}, -2px -2px 4px ${txtSh}`};
  }
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
  align-self: ${({ alSelf }) => alSelf || "none"};
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
    color: ${({ _hovCol }) => _hovCol};
    box-shadow: ${({ _hovBSh }) => _hovBSh};
    text-shadow: ${({ txtSh }) =>
      `1px 1px 1px ${txtSh}, -2px -2px 4px ${txtSh}`};
  }
`;
export const Button2 = styled.button`
  display: ${({ display }) => display || "flex"};
  border: ${({ bd }) => bd || "none"};
  border-radius: ${({ br }) => br || "8px"};
  cursor: ${({ cursor }) => cursor || "pointer"};
  transition: ${({ trans }) => trans || ".4s ease"};
  padding: ${({ pd }) => pd || "0"};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ bg }) => bg || "green"};
  width: ${({ wd }) => wd || "100%"};
  height: ${({ hg }) => hg || "100%"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "flex-start"};
  align-items: ${({ alItems }) => alItems || "center"};
  align-self: ${({ alSelf }) => alSelf || "none"};
`;
// border-top-left-radius: Xpx;
// border-top-right-radius: Xpx;
export const Div = styled.div`
  background: ${({ bg }) => bg || "transparent"};
  color: ${({ color }) => color || "black"};
  padding: ${({ pd }) => pd || "0"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "100%"};
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
  left: ${({ posLeft }) => posLeft};
  right: ${({ posRight }) => posRight};
  background-repeat: no-repeat;
  background-size: contain;
  cursor: ${({ cursor }) => cursor || "default"};
  backdrop-filter: ${({ blur }) => blur || "none"};
  overflow: ${({ ovFlow }) => ovFlow};

  &:hover {
    background: ${({ _hovBg, bg }) => _hovBg || bg};
    color: ${({ _hovCol, color }) => _hovCol || color};
    box-shadow: ${({ _hovBSh }) => _hovBSh};
    display: ${({ _hovDis }) => _hovDis};
    height: ${({ _hovHg }) => _hovHg};
    Img {
      transition: 0.3s;
      // height: ${({ _hovImgHg }) => _hovImgHg};
    }
    Div {
      display: ${({ _hovDivDis }) => _hovDivDis};
      height: ${({ _hovDivHg }) => _hovDivHg};
    }
    Ul {
      display: ${({ _hovUlDis }) => _hovUlDis};
      background-color: ${({ _hovUlBg }) => _hovUlBg};
      box-shadow: ${({ _hovBShUl }) => _hovBShUl};
    }
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
  Span {
    display: ${({ dis }) => dis || "inline"};
    transition: background 0.6s;
  }
  //
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
  height: ${({ hg }) => hg || "8rem"};
  min-height: ${({ minHg }) => minHg};
  width: ${({ wd }) => wd || "8rem"};
  min-height: ${({ minWd }) => minWd};
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
  object-fit: cover;
`;
export const Ul = styled.ul`
  background: ${({ bg }) => bg || "transparent"};
  padding: ${({ pd }) => pd || "5px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  align-self: ${({ alSelf }) => alSelf || "none"};
  color: ${({ color }) => color || "black"};
  border: 2px solid ${({ bd }) => bd || "none"};
  flex-wrap: ${({ flWr }) => flWr || "no-wrap"};
  border-radius: ${({ br }) => br || "8px"};
  font-family: ${({ fnFamily }) => fnFamily || "cursive"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
  transition: ${({ trans }) => trans || ".4s ease"};
  cursor: ${({ cursor }) => cursor || "pointer"};
  margin-block-start: 0;
  margin-block-end: 0;
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  z-index: ${({ zInd }) => zInd};
  box-shadow: ${({ boxSh }) => boxSh || "none"};
  text-decoration: ${({ txtDec }) => txtDec};
  &:hover {
    background: ${({ _hovBg, bg }) => _hovBg || bg};
    color: ${({ _hovCol }) => _hovCol};
    box-shadow: ${({ _hovBSh }) => _hovBSh};
    text-shadow: ${({ txtSh }) =>
      `1px 1px 1px ${txtSh}, -2px -2px 4px ${txtSh}`};
  }
`;
export const Li = styled.li`
  background: ${({ bg }) => bg || "transparent"};
  padding: ${({ pd }) => pd || "5px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  align-self: ${({ alSelf }) => alSelf || "none"};
  color: ${({ color }) => color || "black"};
  border: 2px solid ${({ bd }) => bd || "none"};
  flex-wrap: ${({ flWr }) => flWr || "no-wrap"};
  border-radius: ${({ br }) => br || "8px"};
  font-family: ${({ fnFamily }) => fnFamily || "cursive"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
  cursor: ${({ cursor }) => cursor || "pointer"};
  transition: ${({ trans }) => trans || ".4s ease"};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  text-decoration: ${({ txtDec }) => txtDec};
  &:hover {
    background: ${({ _hovBg, bg }) => _hovBg || bg};
    color: ${({ _hovCol }) => _hovCol};
    box-shadow: ${({ _hovBSh }) => _hovBSh};
    text-shadow: ${({ txtSh }) =>
      `1px 1px 1px ${txtSh}, -2px -2px 4px ${txtSh}`};
  }
`;
