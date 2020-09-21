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

        let random = Math.floor(Math.random()*9)
        let pokemon = this.props.data[random]
        
        let sendXp = () =>{
            this.props.callback(pokemon.xp);
        }
        sendXp();

        return(
            <div className="text-center ">
                <figure className="card m-2">
                    <img className="card-img-top m-0 zoom" 
                        src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + addZero(pokemon.id) + pokemon.id + ".png"} alt="Card cap"
                    ></img>
                    <figcaption className="card-body p-0">
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