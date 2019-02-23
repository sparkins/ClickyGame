import React from 'react';
import { Container } from 'semantic-ui-react'
import './Banner.css';

class Banner extends React.Component {

    render() {

        return (
            <Container>
                <h1 className='header'> Playing the game: </h1>
                <h2>- You earn points by clicking on the large emoji images below, but you must be careful and avoid choosing an
                image that you have already picked. </h2>
                <h2>- The game ends when you either click on all the images, or
                by clicking an image a second time.</h2>
            </Container>
        )
    }
}

export default Banner