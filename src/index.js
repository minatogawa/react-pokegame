import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
// import Pokedex from './Pokedex';
import Pokegame from './Pokegame'
import './style.css'

class Hello extends React.Component{
    render(){
        return(
            <div className="container">
                <h1 className="text-center mb-5">POKEGAME</h1>
                <Pokegame />
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'))