import { useEffect, useState, useContext } from "react"
import { Container, Title, PokemonList, PokemonItem, PokemonImage, PokemonName ,LoadButton, ToggleButton} from "./HomeStyles"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ToggleTheme"
import { Main } from "../context/MainToggleTheme"


const Home = () => {

    const {toggleTheme} = useContext(ThemeContext)

    const [pokemon, setPokemon] = useState([])

    const [offset, setOffset] = useState(0)

    useEffect (() => {
        const fetchInitial = async () => {
            const resposta = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            const dados = await resposta.json()
            
            const detalhes = await Promise.all (
                dados.results.map(async (poke) => {
                    const res = await fetch(poke.url)
                    return await res.json()
                })
            )

            setPokemon(detalhes)
        }

        fetchInitial()
    }, [])

    const loadMorePokemons = async () => {
        const resposta = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset + 10}`)
        const dados = await resposta.json()

        const novosPokemons = await Promise.all(
            dados.results.map(async (poke) => {
                    const res = await fetch(poke.url)
                    return await res.json()
                })
        )

        setPokemon(prev => [...prev, ...novosPokemons])
        setOffset(prev => prev + 10)
    }

    return (
        <Main>
        <Container>
            <Title>Pokémon Explorer</Title>
            
            <PokemonList>
                {pokemon.map((poke, index) => (
                    <PokemonItem key={index}>
                        <Link to={`/pokemon/${poke.name}`}>
                        <PokemonImage src={poke.sprites.front_default} alt={poke.name} />
                        <PokemonName>{poke.name}</PokemonName>
                        </Link>
                    </PokemonItem>
                ))}
            </PokemonList>

            <LoadButton onClick={loadMorePokemons}>Carregar Mais</LoadButton>
        </Container>

        <ToggleButton onClick={toggleTheme}>Alternar Tema</ToggleButton>
        </Main>
    )
}

export {Home}