import React, { Component } from 'react';

export default class Pay extends Component {
    
    
    state = {
        count:0,

    };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.state.count}</h2>
                <ul>
                    {this.props.lista.map((fruta, index)=>(
                    <div>
                        <li>{"Item " + (index + 1) + " - " + fruta}</li>
                    </div> 
                    ))}
                    
                </ul>
                <button onClick={()=>{this.setState({count:this.state.count + 1})}} >Aumenta</button>
                <button onClick={()=>{this.setState({count:this.state.count - 1})}} >Diminui</button>
            </div>
        );
    }
}
