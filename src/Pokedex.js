import React from 'react';
import Pokecard from './Pokecard'

class Pokedex extends React.Component{
    render(){
        const pokeData = [
            {id: 4, name: "Charmander", type: "fire", xp:15},
            {id: 5, name: "Charmeleon", type: "fire", xp:35},
            {id: 6, name: "Charizard", type: "fire", xp:50},
            {id: 1, name: "Bulbasaur", type: "plant", xp:15},
            {id: 2, name: "Ivysaur", type: "plant", xp:35},
            {id: 3, name: "Venusaur", type: "plant", xp:50},
            {id: 7, name: "Squirtle", type: "water", xp:15},
            {id: 8, name: "Wartortle", type: "water", xp:35},
            {id: 9, name: "Blastoise", type: "water", xp:50},
            {id: 150, name: "Mewtwo", type: "psychic", xp:100},
            {id: 14, name: "Kakuna", type: "bug", xp:15},
            {id: 23, name: "Ekans", type: "poison", xp:25},
            {id: 39, name: "Jigglypuff", type: "normal", xp:25},
            {id: 55, name: "Golduck", type: "water", xp:45},
            {id: 82, name: "Magneton", type: "electric", xp:45},
            {id: 45, name: "Vileplume", type: "plant", xp:50},
            {id: 97, name: "Hypno", type: "psychic", xp:45},
            {id: 93, name: "Hunter", type: "ghost", xp:35},
        ]
        return(
            <div className="d-flex mb-5 justify-content-center">
                <Pokecard 
                    data = {pokeData}
                />
                <Pokecard 
                    data = {pokeData}
                />
                <Pokecard 
                    data = {pokeData}
                />
                <Pokecard 
                    data = {pokeData}
                />
            {/* <h3>Total XP: {xpFromPokecard}</h3> */}
            </div>
            
        )
    }
}

export default Pokedex;