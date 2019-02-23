import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

class NavBar extends React.Component {

    state = {
        score: 0,
        topScore: 0,
        message: ""
    }
    
    render() {
        return (
            <Navbar>
                <nav className="navbar navbar-default navbar-sticky-top">
                    <ul>
                        <li className="itemLeft">Emoji-Click Memory Game</li>
                        <li className="itemCenter">Message: {this.state.message}</li>
                        <li className="itemRight">Score: {this.state.score} | Top Score: {this.state.topScore}</li>
                    </ul>
                </nav>
            </Navbar >
        );
    }
}

export default NavBar;