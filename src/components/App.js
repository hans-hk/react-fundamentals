import React from 'react';
// var React = require('react');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.setState({name: 'velopert'})}}>Click </button>
                <h1>Hello!@#!!s {this.state.name}</h1>
            </div>
        );
    }
}

export default App;
// module.export = App;