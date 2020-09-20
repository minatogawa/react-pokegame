import React from 'react';

class Pokecard extends React.Component{
    render(){
        function addZero(num){
            if(num<10){
                return '00'
            } 
            if(num >= 10 && num < 100){
                return '0'
            } else{
                return ''
            }
        }
        return(
            <div className="row row-cols-1 row-cols-md-3 ">
                {this.props.data.map((pokemon) =>
                    <div className="col-lg-4 mb-4">
                        <div className="card">
                            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/` + addZero(pokemon.id) + pokemon.id + ".png"} className="card-img-top w-50 m-auto" alt={pokemon.name}></img>
                            <div className="card-body text-center p-0">
                                <h5 className="card-title">{pokemon.name}</h5>
                                <p className="card-text">Type: {pokemon.type}</p>
                                <p className="card-text">XP: {pokemon.xp}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Pokecard;