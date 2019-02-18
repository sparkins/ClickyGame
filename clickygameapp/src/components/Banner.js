import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Banner.css';

class Banner extends React.Component {

    render() {

        return (

            <Jumbotron fluid>
                <Container>
                    {/* <Row className="justify-content-md-center title-row">
                        <Col md={8}>
                            <h1 className="jumbotron-title">CLICKY GAME</h1>
                        </Col>
                        <Col md={4}>
                            {/* <h2 className="scoreboard">Score: 0 | Top Score 0</h2> */}
                        {/* </Col> */}
                    {/* </Row> */}
                    <Row className="justify-content-md-center jumbotron-text">
                        <Col md={2}></Col>
                        <Col md={8}><p>
                            To play the game, you must click on the images below.  You will earn a point for each image clicked. However,
                            you must avoid the images that you have already selected, as the game ends if you click on an image a second time.
                        </p></Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}

export default Banner