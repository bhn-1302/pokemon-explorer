import styled from "styled-components";

const Main = styled.main`
    background: ${({theme}) => (theme.mode === 'dark' ? '#222' : '#fff')};
    border-radius: 8px;
`

export {Main}