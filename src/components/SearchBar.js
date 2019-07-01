import React, { Component } from 'react';
import './style.css';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term : ''
        }
    // this.onFormSubmit = this.onFormSubmit.bind(this)
    
    
    }
    onInputChange = event => {
        console.log(event.target.value)
    }

    onInputClick =() =>{
        console.log("onInputClick called")

    }
    onFormSubmit = event => {
        event.preventDefault();
        //console.log("showing value on form submit " , this.state.term )
        this.props.onSubmit(this.state.term)
    }

    render() {
//        console.log("component rerendered")
        return (
            <div className = "searchBarStyle">
            <form onSubmit = {this.onFormSubmit}>
                <label> Image search</label>
                <input 
                 type= "text"
                 value = {this.state.term}
                 onChange = {((event) => this.setState({ term : event.target.value}))}
                 onClick = {this.onInputClick} />
            
            </form> 
            </div>
        )
    }
}
