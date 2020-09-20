import React from 'react';
import ReactDOM from 'react-dom';
// import Pokedex from './Pokedex';
import Pokegame from './Pokegame'

class Hello extends React.Component{
    render(){
        return(
            <div className="container">
                <h1>Pokegame</h1>
                <Pokegame />
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'))