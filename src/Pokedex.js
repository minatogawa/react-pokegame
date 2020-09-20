import React from 'react';
import Pokecard from './Pokecard'


class Pokedex extends React.Component{
    render(){
        const pokeData = [
            {id: 4, name: "Charmander", type: "fire", xp:15},
            {id: 5, name: "Charmeleon", type: "fire", xp:35},
            {id: 6, name: "Charizard", type: "fire", xp:50},
            {id: 150, name: "Mewtwo", type: "psychic", xp:100},
            {id: 1, name: "Bulbasaur", type: "plant", xp:15},
            {id: 2, name: "Ivysaur", type: "plant", xp:35},
            {id: 3, name: "Venusaur", type: "plant", xp:50},
            {id: 7, name: "Squirtle", type: "water", xp:15},
        ]
        return(
            <div>
                <Pokecard 
                    data = {pokeData}
                />
            </div>
        )
    }
}

export default Pokedex;