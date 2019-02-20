import React from 'react';
// import './ImageCards.css';
// import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import '../semantic/dist/semantic.min.css'
// import { Card, Icon, Image } from 'semantic-ui-react'


const ImageCards = props => (
    <Card>
        <Card.Img
        // <Image 
          alt={props.image} 
          src={require(`./../${props.image}`)}  
          style={{"height": "100px",  "width": "100px"}}
          onClick={() => props.handleClick(props.id)} /> 
    </Card>  
);

export default ImageCards;