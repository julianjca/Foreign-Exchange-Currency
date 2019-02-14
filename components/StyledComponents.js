import styled, { css } from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-height: 100vh;
padding: 5% 0;
flex-direction: column;
`;

export const Input = styled.input`
width: 200px;
height: 40px;
text-align: center;
margin: 10px auto;
border-radius: 10px;
border: 1px solid #1a1a1a;
`;

export const Error = styled.h6`
color: red;
`;

export const Button = styled.button`
width: 25px;
height: 25px;
border-radius: 5px;
${props=> props.big && css`
  width: 40px;
  margin-left: 10px;
`}
`;