import React from 'react';
import Pokedex from './Pokedex'

class Pokegame extends React.Component{
    render(){   
        return(
            <div>
                <h1>Player One</h1>
                        <Pokedex />
                <h1>Player Two</h1>
                        <Pokedex />
            </div>
        )
    }
}

export default Pokegame;