import React from 'react';
import { Container } from 'semantic-ui-react'
import './Banner.css';

class Banner extends React.Component {

    render() {

        return (
            <Container>
                <h1 className='header'> Playing the game: </h1>
                <h3>** THIS IS A MEMORY GAME - where you score points for clicking on the large emoji icons below.</h3>
                <h3>** THE OBJECT OF THE GAME - is to click all 12 emoji icons just once, but beware they shuffle after each click.</h3>
                <h3>** THE GAME ENDS - when you either click on all the images, or
                by clicking an image a second time.  GOOD LUCK !!!</h3>
            </Container>
        )
    }
}

export default Banner