import React, {Component} from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends Component {


  constructor() {
    super()
    this.state = {
      pokemon: [],
      value: "",
      results: [],
      formValues: {}
    }
  };

  handleSearchChange = (event) => {
    this.setState({
      value: event.target.value,
      results: this.state.pokemon.filter(pokemon => pokemon.name.includes(event.target.value))
    })
  }

 
componentDidMount() {
    (async () => {
      const resp = await fetch('http://localhost:3000/pokemon')
      const pokeData = await resp.json()
      this.setState({pokemon: pokeData, results: pokeData, formValues: {name: '', hp: '', frontUrl: '', backUrl: ''}}, console.dir("data", this.state.pokemon))
    })()
  }



  handleSubmit= (e, {name, hp, frontUrl, backUrl}) => {
    e.preventDefault()
    const postConfig = {method: "POST", headers:{"Content-Type": "application/json"}, 
    body: JSON.stringify({name: name, stats: [{name: 'hp', value: hp}], sprites: {front: frontUrl, back: backUrl}})};
    // this.createPokemon(postConfig);
    (async () => {
      const resp = await fetch('http://localhost:3000/pokemon', postConfig)
      const pokeData = await resp.json()
      console.log(pokeData)
      const resp2 = await fetch('http://localhost:3000/pokemon')
      const pokeData2 = await resp2.json()
      this.setState({pokemon: pokeData2, results: pokeData2, formValues: {name: '', hp: '', frontUrl: '', backUrl: ''}}, console.dir("data", this.state.pokemon))
    })()
  };


  render() {
    const { pokemon } = this.state
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search value={this.state.value} onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })} showNoResults={false} />
        <br />
        <PokemonCollection results={this.state.results} />
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} formValues={this.state.formValues} />
      </div>
    )
  }
}

export default PokemonPage
