import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props);
            this.state = {
               age: 29
            }
    }
    render() {
        return (
            <div>
                Hola
            </div>
        );
    }
}


Greeting.propTypes = {

};


export default Greeting;
