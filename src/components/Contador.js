import React from 'react';
import"../assets/css/Contador.css";

export default class Contador extends React.Component{
    constructor(){
        super()
        this.state={
            contador:0,
        }
    }

    incrementar(){
        this.setState({
            contador:this.state.contador+1,
        })
    }

    decrementar(){
        this.setState({
            contador:this.state.contador-1,
        })
    }



    render(){
        return(
            <div className="contador">
                    <h1>{this.state.contador}</h1>
                    <div className="botoes">
                        <button onClick={this.decrementar.bind(this)}>Decrementar</button>
                        <button onClick={this.incrementar.bind(this)}>Incrementar</button>
                        
                        </div>
                </div>
            )

    }
}