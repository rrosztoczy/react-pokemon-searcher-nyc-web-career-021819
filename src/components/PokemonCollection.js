import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = (props) => {

    function renderCards() {
      return props.results.map(poke => {
        return <PokemonCard poke={poke} key={poke.name}/>
      })
    }

    return (
      <Card.Group itemsPerRow={6}>
        {renderCards()}
      </Card.Group>
    )
}

export default PokemonCollection
