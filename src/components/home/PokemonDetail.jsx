import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Main, Container, Title, PokemonImage, SectionType, SectionMoves, SectionAbilities,SubTitle, ListItem, List, BackButton } from "./PokemonDetailStyles"
import { Link } from "react-router-dom"

const PokemonDetail = () => {

    const { name } = useParams()
    const [pokemon, setPokemon] = useState(null)
    const [abilities, setAbilities] = useState([])

    useEffect (() => {
        const fetchPokemon = async () => {
            const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}`)
            const data = await res.json()
            setPokemon(data)

            const habilidades = await Promise.all(
                data.abilities.map(async(item) => {
                    const res = await fetch(item.ability.url)
                    const abilityData = await res.json()

                    return {
                        name: item.ability.name,
                        description: abilityData.effect_entries.find(e => e.language.name === 'en') ?.effect || 'No description'
                    }
                })
            )

            setAbilities(habilidades)
        }
        fetchPokemon()
    }, [name])

    if (!pokemon) return <p>Loading...</p>

    return (
        <Main>
        <Container>
            <Title>{pokemon.name}</Title>
            <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />

            <SectionType>
            <SubTitle>Tipo:</SubTitle>
            <List>
                {pokemon.types.map((t, index) => (
                    <ListItem key={index}><strong>{t.type.name}</strong></ListItem>
                ))}
            </List>
            </SectionType>

                <SectionMoves>
            <SubTitle>Movimentos:</SubTitle>
            <List>
                {pokemon.moves.slice(0, 10).map((m, index) => (
                    <ListItem key={index}>
                        {m.move.name}
                    </ListItem>
                ))}
            </List>
            </SectionMoves>

                <SectionAbilities>
            <SubTitle>Habilidades:</SubTitle>
            <List>
                {abilities.map((a, index) => (
                    <ListItem key={index}>
                        <strong>{a.name}</strong>: {a.description}
                    </ListItem>
                ))}
            </List>
            </SectionAbilities>
        </Container>
        <Link to={'/'}>
        <BackButton>
                Voltar
            </BackButton>
            </Link>
        </Main>
    )
}

export {PokemonDetail}