import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar>
                <nav className="navbar navbar-default navbar-sticky-top">
                    <ul>
                        <li className="itemLeft"></li>
                        <li className="itemCenter">Emoji-Click Memory Game</li>
                        <li className="itemRight">Score: {this.props.score} | Top Score: {this.props.topScore}</li>
                    </ul>
                </nav>
            </Navbar >
        );
    }
}

export default NavBar;