import React, {Component} from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends Component {


  constructor() {
    super()
    this.state = {
      pokemon: []
    }
    console.log("State", this.state)
  };

 
componentDidMount() {
    (async () => {
      const resp = await fetch('http://localhost:3000/pokemon')
      const pokeData = await resp.json()
      this.setState({pokemon: pokeData}, console.dir("data", this.state.pokemon))
    })()
  }


  render() {
    const { pokemon } = this.state
    console.log("deconstructed", pokemon);
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={pokemon} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
