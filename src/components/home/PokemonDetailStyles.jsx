import styled from "styled-components";

export const Main = styled.main`
    background: ${({theme}) => (theme.mode === 'dark' ? '#222' : '#fff')};
    border-radius: 8px;
`

export const Container = styled.div`
    padding: 22px;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 12px;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Title = styled.h1`
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 20px;
    color: #3B4CCA;
    font-family: 'Press Start 2P', cursive;
    font-size: 35px;
    letter-spacing: 3px;
`

export const SubTitle = styled.h2`
    text-align: center;
`

export const PokemonImage = styled.img`
    display: block;
    margin: 0 auto 20px;
    width: 150px;
`

export const SectionType = styled.section`
    margin-bottom: 30px;
    color: #FF1C1C;
`

export const SectionMoves = styled.section`
    margin-bottom: 30px;
    color: #3B4CCA;
`

export const SectionAbilities = styled.section`
    margin-bottom: 30px;
    color: #FFCB05;
`

export const List = styled.ul`
    list-style: none;
    padding-left: 0;
`
export const ListItem = styled.li`
    margin: 8px;
    color: ${({theme}) => (theme.mode === 'dark' ? '#fff' : '#222')}
`

export const BackButton = styled.button`
    display: block;
    margin: 30px auto;
    padding: 10px 20px;
    font-size: 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #0056b3;
    }
`