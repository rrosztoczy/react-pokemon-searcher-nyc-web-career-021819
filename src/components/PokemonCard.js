import React from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = ({ poke }) => {

  const pokehp = () => {
    return poke.stats.filter(pokeStat => pokeStat.name === 'hp')
  } 
    return (
      <Card>
        <div>
          <div className="image">
            <img src={poke.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red">{pokehp()[0].value}</i>
            </span>
          </div>
        </div>
      </Card>
    )
  }

export default PokemonCard
