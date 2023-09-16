import styled from "styled-components";

export const Form = styled.form`
  background: ${({ bg }) => bg || "#fff"};
  padding: ${({ pd }) => pd};
  height: ${({ hg }) => hg};
  width: ${({ wd }) => wd};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  color: ${({ color }) => color || "#fff"};
  border: 2px solid ${({ bd }) => bd || "none"};
  border-radius: ${({ br }) => br || "8px"};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  overflow: ${({ overflow }) => overflow};
  font-family: ${({ fnFamily }) => fnFamily || "cursive"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
  box-shadow: ${({ boxSh }) => boxSh};
`;
export const Input = styled.input`
  background: ${({ bg }) => bg || "#fff"};
  padding: ${({ pd }) => pd};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  color: ${({ color }) => color || "black"};
  border: ${({ bd }) => bd};
  border-right: ${({ bdR }) => bdR};
  border-left: ${({ bdL }) => bdL};
  border-bottom: ${({ bdB }) => bdB};
  border-top: ${({ bdT }) => bdT};
  outline: ${({ outline }) => outline};
  box-shadow: ${({ boxSh }) => boxSh || "none"};
  border-radius: ${({ br }) => br || "8px"};
  text-align: ${({ txAlign }) => txAlign || "center"};
  font-family: ${({ fnFamily }) => fnFamily || "Roboto"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
`;
export const TextArea = styled.textarea`
  background: ${({ bg }) => bg || "#fff"};
  padding: ${({ pd }) => pd};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  color: ${({ color }) => color || "black"};
  border: 2px solid ${({ bd }) => bd || "black"};
  box-shadow: ${({ boxSh }) => boxSh || "none"};
  border-radius: ${({ br }) => br || "8px"};
  text-align: ${({ txAlign }) => txAlign || "center"};
  font-family: ${({ fnFamily }) => fnFamily || "Roboto"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
`;
export const Label = styled.label`
  background: ${({ bg }) => bg};
  padding: ${({ pd }) => pd};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  color: ${({ color }) => color || "black"};
  position: ${({ pos }) => pos || "static"};
  top: ${({ posTop }) => posTop};
  left: ${({ posLeft }) => posLeft};
  right: ${({ posRight }) => posRight};
  border: 2px solid ${({ bd }) => bd || "none"};
  border-radius: ${({ br }) => br || "8px"};
  font-family: ${({ fnFamily }) => fnFamily || "cursive"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
`;
export const Select = styled.select`
  background: ${({ bg }) => bg || "#fff"};
  padding: ${({ pd }) => pd};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  margin-left: ${({ ml }) => ml};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  color: ${({ color }) => color || "black"};
  border: 2px solid ${({ bd }) => bd || "black"};
  border-radius: ${({ br }) => br || "8px"};
  font-family: ${({ fnFamily }) => fnFamily || "Roboto"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
  cursor: ${({ cursor }) => cursor || "pointer"};
  letter-spacing: ${({ letterSp }) => letterSp};
`;
export const Option = styled.option`
  letter-spacing: ${({ letterSp }) => letterSp};
  background: ${({ bg }) => bg || "#fff"};
  padding: ${({ pd }) => pd};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  margin-left: ${({ ml }) => ml};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  color: ${({ color }) => color || "black"};
  border: 2px solid ${({ bd }) => bd || "black"};
  border-radius: ${({ br }) => br || "8px"};
  font-family: ${({ fnFamily }) => fnFamily || "Roboto"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
  letter-spacing: ${({ letterSp }) => letterSp};
  cursor: ${({ cursor }) => cursor || "pointer"};
`;

export const P = styled.p`
  text-decoration: ${({ txtD }) => txtD};
  background: ${({ bg }) => bg || "transparent"};
  padding: ${({ pd }) => pd || "5px"};
  height: ${({ hg }) => hg || "auto"};
  min-height: ${({ minHg }) => minHg};
  width: ${({ wd }) => wd || "auto"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  border-right: ${({ bdR }) => bdR};
  border-left: ${({ bdL }) => bdL};
  border-bottom: ${({ brB }) => brB};
  border-top: ${({ brT }) => brT};
  border-radius: ${({ br }) => br || "8px"};
  border: ${({ bd }) => bd};
  align-items: ${({ alItems }) => alItems || "center"};
  text-align: ${({ txAlign }) => txAlign || "center"};
  align-self: ${({ alSelf }) => alSelf || "none"};
  color: ${({ color }) => color};
  box-shadow: ${({ boxSh }) => boxSh};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  letter-spacing: ${({ letterSp }) => letterSp || "0px"};
  white-space: ${({ wSp }) => wSp || "pre-line"};
  flex-wrap: ${({ flWr }) => flWr || "no-wrap"};
  font-family: ${({ fnFamily }) => fnFamily || "Roboto"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize || "22px"};
  cursor: ${({ cursor }) => cursor};
  filter: ${({ filter }) => filter};
  z-index: ${({ zInd }) => zInd};
  transition: ${({ trans }) => trans || ".4s"};
  text-shadow: ${({ textSh }) =>
    `-1px -1px 1px ${"#333"}, 4px 4px 4px ${textSh}`};
  &:hover {
    background: ${({ _hovBg, bg }) => _hovBg || bg};
    color: ${({ _hovCol }) => _hovCol};
    box-shadow: ${({ _hovBSh }) => _hovBSh};
    text-shadow: ${({ txtSh }) =>
      `1px 1px 1px ${txtSh}, -2px -2px 4px ${txtSh}`};
  }
`;
export const Button = styled.button`
  background: ${({ bg }) => bg || "#5260DC"};
  padding: ${({ pd }) => pd || "2px"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || "auto"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  align-self: ${({ alSelf }) => alSelf || "none"};
  color: ${({ color }) => color || "#fff"};
  border: ${({ bd }) => bd || "2px solid #686B86"};
  border-right: ${({ bdR }) => bdR};
  border-left: ${({ bdL }) => bdL};
  border-bottom: ${({ bdB }) => bdB};
  border-top: ${({ bdT }) => bdT};
  border-radius: ${({ br }) => br || "4px"};
  cursor: ${({ cursor }) => cursor || "pointer"};
  transition: ${({ trans }) => trans || ".4s ease"};
  letter-spacing: ${({ letterSp }) => letterSp || ".1rem"};
  font-family: ${({ fnFamily }) => fnFamily || "Roboto"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  font-size: ${({ fSize }) => fSize};
  box-shadow: ${({ boxSh }) => boxSh || "none"};
  position: ${({ pos }) => pos || "static"};
  top: ${({ posTop }) => posTop};
  left: ${({ posLeft }) => posLeft};
  right: ${({ posRight }) => posRight};
  overflow: ${({ overflow }) => overflow};
  filter: ${({ filter }) => filter};
  margin-top: ${({ mt }) => mt || "none"};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr};
  box-shadow: ${({ boxSh }) => boxSh || "2px 2px .3rem .1rem rgb(0,0,0,0.35)"};
  letter-spacing: ${({ letterSp }) => letterSp || ".15rem"};
  z-index: ${({ zInd }) => zInd};
  &:hover {
    background: ${({ bg, _hovBg }) => _hovBg || bg};
    color: ${({ _hovCol }) => _hovCol};
    box-shadow: ${({ _hovBSh }) => _hovBSh};
    text-shadow: ${({ txtSh }) => txtSh};
    top: ${({ _hovPosTop }) => _hovPosTop};
    left: ${({ _hovPosLeft }) => _hovPosLeft};
  }
`;
export const Button2 = styled.button`
  display: ${({ display }) => display || "flex"};
  border: ${({ bd }) => bd};
  border-radius: ${({ br }) => br};
  cursor: ${({ cursor }) => cursor || "pointer"};
  transition: ${({ trans }) => trans || ".4s ease"};
  padding: ${({ pd }) => pd};
  margin-bottom: ${({ mb }) => mb};
  margin-top: ${({ mt }) => mt};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  position: ${({ pos }) => pos};
  top: ${({ posTop }) => posTop};
  left: ${({ posLeft }) => posLeft};
  right: ${({ posRight }) => posRight};
  overflow: ${({ overflow }) => overflow};
  z-index: ${({ zInd }) => zInd};
  width: ${({ wd }) => wd};
  height: ${({ hg }) => hg};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "flex-start"};
  align-items: ${({ alItems }) => alItems || "center"};
  align-self: ${({ alSelf }) => alSelf};
`;
export const Div = styled.div`
  background: ${({ bg }) => bg || "transparent"};
  background-color: ${({ bgC }) => bgC};
  color: ${({ color }) => color || "black"};
  padding: ${({ pd }) => pd || "0"};
  height: ${({ hg }) => hg || "auto"};
  width: ${({ wd }) => wd || ""};
  min-height: ${({ minHg }) => minHg};
  border-radius: ${({ br }) => br || "8px"};
  border: ${({ bd }) => bd || "none"};
  border-right: ${({ bdR }) => bdR};
  border-left: ${({ bdL }) => bdL};
  border-bottom: ${({ bdB }) => bdB};
  border-top: ${({ bdT }) => bdT};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  flex-wrap: ${({ flWr }) => flWr || "no-wrap"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  align-self: ${({ alSelf }) => alSelf || "none"};
  margin: ${({ margin }) => margin || "none"};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  box-shadow: ${({ boxSh }) => boxSh || "none"};
  background-image: url(${({ img }) => img || "none"});
  clip-path: polygon(${({ clPath }) => clPath || "none"});
  transform: rotateX(${({ rotX }) => rotX || "none"});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  transition: ${({ trans }) => trans || ".4s ease"};
  position: ${({ pos }) => pos || "static"};
  top: ${({ posTop }) => posTop};
  bottom: ${({ posBot }) => posBot};
  left: ${({ posLeft }) => posLeft};
  right: ${({ posRight }) => posRight};
  overflow: ${({ overflow }) => overflow};
  overflow-y: ${({ overflowY }) => overflowY};
  z-index: ${({ zInd }) => zInd};
  cursor: ${({ cursor }) => cursor || "default"};
  backdrop-filter: ${({ blur }) => blur};
  overflow: ${({ ovFlow }) => ovFlow};

  &:hover {
    background: ${({ _hovBg }) => _hovBg};
    color: ${({ _hovCol, color }) => _hovCol};
    box-shadow: ${({ _hovBSh }) => _hovBSh};
    display: ${({ _hovDis }) => _hovDis};
    height: ${({ _hovHg }) => _hovHg};
    color: ${({ _hovColIm }) => _hovColIm} !important;
    Img {
      transition: 0.3s;
      // height: ${({ _hovImgHg }) => _hovImgHg};
    }
    Div {
      display: ${({ _hovDivDis }) => _hovDivDis};
      height: ${({ _hovDivHg }) => _hovDivHg};
      left: ${({ _hovPosLeftDiv }) => _hovPosLeftDiv};
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
// width: ${({ wd }) => wd || "100%"};
export const DivAccountBar = styled.div`
  background: ${({ bg }) => bg || "transparent"};
  background-color: ${({ bgC }) => bgC};
  color: ${({ color }) => color || "black"};
  padding: ${({ pd }) => pd || "0"};
  height: ${({ hg }) => hg || "auto"};
  min-height: ${({ minHg }) => minHg};
  border-radius: ${({ br }) => br || "8px"};
  border: ${({ bd }) => bd || "none"};
  border-right: ${({ bdR }) => bdR};
  border-left: ${({ bdL }) => bdL};
  border-bottom: ${({ bdB }) => bdB};
  border-top: ${({ bdT }) => bdT};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  flex-wrap: ${({ flWr }) => flWr || "no-wrap"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  align-self: ${({ alSelf }) => alSelf || "none"};
  margin: ${({ margin }) => margin || "none"};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  box-shadow: ${({ boxSh }) => boxSh || "none"};
  background-image: url(${({ img }) => img || "none"});
  clip-path: polygon(${({ clPath }) => clPath || "none"});
  transform: rotateX(${({ rotX }) => rotX || "none"});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  transition: ${({ trans }) => trans || ".4s ease"};
  position: ${({ pos }) => pos || "static"};
  top: ${({ posTop }) => posTop};
  bottom: ${({ posBot }) => posBot};
  left: ${({ posLeft }) => posLeft};
  right: ${({ posRight }) => posRight};
  overflow: ${({ overflow }) => overflow};
  overflow-y: ${({ overflowY }) => overflowY};
  z-index: ${({ zInd }) => zInd};
  cursor: ${({ cursor }) => cursor || "default"};
  backdrop-filter: ${({ blur }) => blur};
  overflow: ${({ ovFlow }) => ovFlow};

  &:hover {
    background: ${({ _hovBg }) => _hovBg};
    color: ${({ _hovCol, color }) => _hovCol};
    box-shadow: ${({ _hovBSh }) => _hovBSh};
    display: ${({ _hovDis }) => _hovDis};
    height: ${({ _hovHg }) => _hovHg};
    color: ${({ _hovColIm }) => _hovColIm} !important;
    Img {
      transition: 0.3s;
      // height: ${({ _hovImgHg }) => _hovImgHg};
    }
    Div {
      display: ${({ _hovDivDis }) => _hovDivDis};
      height: ${({ _hovDivHg }) => _hovDivHg};
      left: ${({ _hovPosLeftDiv }) => _hovPosLeftDiv};
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
export const H2 = styled.h2`
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
  font-family: ${({ fnFamily }) => fnFamily || "Roboto"};
  font-weight: ${({ fWeight }) => fWeight || "300"};
  align-self: ${({ alSelf }) => alSelf || "none"};
`;
export const Img = styled.img`
  height: ${({ hg, size }) => size || hg || "8rem"};
  min-height: ${({ minHg }) => minHg};
  width: ${({ wd, size }) => size || wd || "8rem"};
  min-height: ${({ minWd }) => minWd};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ jfCont }) => jfCont || "center"};
  align-items: ${({ alItems }) => alItems || "center"};
  border: ${({ bd }) => bd};
  border-radius: ${({ br }) => br || "none"};
  padding: ${({ pd }) => pd || "none"};
  position: ${({ pos }) => pos};
  margin-bottom: ${({ mb }) => mb || "none"};
  margin-top: ${({ mt }) => mt || "none"};
  margin-left: ${({ ml }) => ml || "none"};
  margin-right: ${({ mr }) => mr || "none"};
  align-self: ${({ alSelf }) => alSelf || "none"};
  box-shadow: ${({ boxSh }) => boxSh || "none"};
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
    background: ${({ _hovBg, bg }) => _hovBg};
    color: ${({ _hovCol }) => _hovCol};
    box-shadow: ${({ _hovBSh }) => _hovBSh};
    text-shadow: ${({ txtSh }) =>
      `1px 1px 1px ${txtSh}, -1px -1px 1px ${txtSh}`};
  }
`;
export const Li = styled.li`
  list-style: none;
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
