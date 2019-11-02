import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    render() {
        return (
            <h1>Hello world!</h1>
        );
    }
}

/* Render */
ReactDOM.render(<App />, document.getElementById('root'));