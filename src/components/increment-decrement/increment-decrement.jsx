import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './increment-decrement.css';

class IncrementDecrement extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: props.num
        }
        this.incrementOrDecrement = this.incrementOrDecrement.bind(this);
    }

    incrementOrDecrement(e){
        switch(e.target.name){
            case 'Increment':
                this.setState({ num: this.state.num+1 })
                break;
            case 'Decrement':
                if(this.state.num === 0){
                    alert("Cannot be less than zero.")
                    break;
                }
                this.setState({ num: this.state.num-1 })
                break;
        }
    }

    render() {
        return (
            <div className='container'>
                <button name='Increment' onClick={this.incrementOrDecrement}>Increment</button>
                <span id='num'> {this.state.num} </span>
                <button name='Decrement' onClick={this.incrementOrDecrement}>Decrement</button>
            </div>
        )
    }
};

IncrementDecrement.propTypes = {
    num: PropTypes.number.isRequired
}

export default IncrementDecrement;