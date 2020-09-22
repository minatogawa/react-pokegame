import React, {Component} from 'react';

class Pokecard extends Component{
    render(){
        const  url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
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
        const pokemon = this.props.data[Math.floor(Math.random()*18)]
        const imgSrc = `${url}${addZero(pokemon.id)}${pokemon.id}.png`
        return(
            <div className="text-center ">
                <figure className="card m-2">
                    <img className="card-img-top m-0 zoom" 
                        src={imgSrc} alt={pokemon.name}
                    />                   <figcaption className="card-body p-0">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>{pokemon.name}</strong></li>
                            <li className="list-group-item"><strong>Type: </strong>{pokemon.type}</li>
                            <li className="list-group-item xp"><strong>xp: </strong>{pokemon.xp}</li>
                        </ul>
                    </figcaption>
                </figure>
            </div>
        )
    }
}

export default Pokecard;


// sendXp = () =>{
          
//     this.props.callback(this.props.data[random].xp)
// }