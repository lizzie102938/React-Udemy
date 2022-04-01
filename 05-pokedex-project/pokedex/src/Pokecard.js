import React, {Component} from "react";
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
      return (
        <div className="Pokecard">
          <h1>{this.props.name}</h1>
          <img src={imgSrc} alt={this.props.name}/>
          <h3>{this.props.type}</h3>
          <h3>{this.props.exp}</h3>
        </div>
      );
  }
}

export default Pokecard;
