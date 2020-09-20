import React from 'react';
import Pokecard from './Pokecard'

let xpPoints = 0

class Pokedex extends React.Component{

    callXp = (xpFromPokecard) =>{
        xpPoints += xpFromPokecard
    }
    
    

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
        ]
        return(
            <div className="d-flex">
                <Pokecard 
                    data = {pokeData}
                    callback = {this.callXp}
                />
                <Pokecard 
                    data = {pokeData}
                    callback = {this.callXp}
                />
                <Pokecard 
                    data = {pokeData}
                    callback = {this.callXp}
                />
                <Pokecard 
                    data = {pokeData}
                    callback = {this.callXp}
                />
            <h3>Total XP: {xpPoints}</h3>
            </div>
            
        )
    }
}

export default Pokedex;