import styled, { css, createGlobalStyle, keyframes } from "styled-components";

export const sharedStyle = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  background: "green";
  margin: 50px;
`;
export const StyledForm = styled.form`
  width: 100%;
  max-width: 2000px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  boz-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
export const H1Form = styled.h1`
  display: flex;
  margin: ${({ margin }) => margin || "10px 0 30px"};
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Box = styled.div`
  display: flex;
  margin: ${({margin})=> margin || null};
`;

export const BoxColumn = styled.div`
  display: 1;
  margin-right: 10px;
`;

export const BoxButton = styled.div`
  margin-right: 20px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyle}
`;
export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyle}
`;
export const StyledButton = styled.button`
  display: block;
  background-color: ${({ bg }) => bg || "green"};
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  margin: 0 0 10px 0;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;
export const StyledFieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;
export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const StyledAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const fadeIn = keyframes`
    0%{
        opacity:0;
    }

    100%{
        opacity:1;
    }
`;

export const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 100%;
  padding: 10px;

  
animation: ${fadeIn} 1s ease-out;
`;

export const StyledArrowWrapper = styled.div`
display: flex;
align-items:center;
margin-top: 10px;

animation: ${fadeIn} 2s ease-out;
`;


// export const FormProfile = styled.form`
//   background-color: ${({ color }) => color || "#000"};
//   animation: ${fadeIn} 0.5s ease-out;
// `;

// export const Box = styled.div`
//     padding: 1rem;
//     margin: 1rem;
// `;
