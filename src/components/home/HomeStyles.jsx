import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    color: #CC0000;
    font-family: 'Press Start 2P', cursive;
    letter-spacing: 5px;
`

export const PokemonList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    list-style: none;
    padding: 15px;
    background-color: #808080;
    border-radius: 8px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const PokemonItem = styled.li`
    background: #f0f0f0;
    border-radius: 12px;
    padding: 10px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`

export const PokemonImage = styled.img`
    width: 96px;
    height: 96px;
`

export const PokemonName = styled.p`
    font-size: 25px;
    font-family: 'VT323', monospace;
    color: #7A42F4;
`

export const LoadButton = styled.button`
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

export const ToggleButton = styled.button`
    display: block;
    margin: 0 auto;
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