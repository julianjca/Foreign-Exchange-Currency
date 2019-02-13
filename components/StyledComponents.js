import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
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
`