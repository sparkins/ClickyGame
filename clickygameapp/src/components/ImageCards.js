import React from 'react';
import './ImageCards.css';
import { Card, Image } from 'semantic-ui-react'

const ImageCards = props => (
    <Card>
        {/* <Card.Img */}
        <Image className="emojiImages"
          alt={props.image} 
          src={require(`./../${props.image}`)}  
          onClick={() => props.handleClick(props.id)} 
          /> 
    </Card>  
);

export default ImageCards;