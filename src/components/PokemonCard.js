import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component{

  state = {
    image: this.props.poke.sprites.front,
    side: "front"
  }

  handleClick = (event) => {
    if (this.state.side === "front") {
    this.setState({
      image: this.props.poke.sprites.back,
      side: "back"
    })
    } else {
      this.setState({
      image: this.props.poke.sprites.front,
      side: "front"
    })
    }
  }


  pokehp = () => {
    return this.props.poke.stats.filter(pokeStat => pokeStat.name === 'hp')
  } 

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.handleClick} src={this.state.image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red">{this.pokehp()[0].value}</i>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
