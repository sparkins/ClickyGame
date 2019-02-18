import React from 'react';
// import CardDeck from 'react-bootstrap/CardDeck'
// import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row';

const ImageCards = props => (
  <div className="card" onClick={props.handleClick(props.id)}>
    <div className="img-container">
      <img alt={props.src.replace(".png", "")} src={require("../images/" + props.src)} />
    </div>
  </div>
);


// class ImagePanel extends React.Component {

//   constructor() {
//     super();

//     this.state = {
//       images: [
//         { src: "../emoji.anger.png", isClicked: false },
//         { src: "../emoji.big-eyes.png", isClicked: false },
//         { src: "../emoji.blushing.png", isClicked: false },
//         { src: "../emoji.crying.png", isClicked: false },
//         { src: "../emoji.goofy.png", isClicked: false },
//         { src: "../emoji.love-heart.png", isClicked: false },
//         { src: "../emoji.nerd-glasses.png", isClicked: false },
//         { src: "../emoji.sadness.png", isClicked: false },
//         { src: "../emoji.tears-of-joy.png", isClicked: false },
//         { src: "../emoji.teethy-grin.png", isClicked: false },
//         { src: "../emoji.the-thinker.png", isClicked: false },
//         { src: "../emoji.zipper-mouth.png", isClicked: false }
//       ]
//     };
//   }
// }

  // render() {
    // return (

      // <Container>
      //   <Card bg="info" style={{ width: '18rem' }}>
      //         <Card.Img scr= {require("../assets/images/emoji.anger.png")} />
      //       </Card>
      //   <Container>

      // images.map((image, index) => {

      //   key = {index}
      //   this.imgDisplay = {image.src}
      //   this.

      //       <img src={image.src} />
      //     </div>

      // })

    // <Container>
    //   <Row>
    //     <CardDeck>
    //         <Card bg="info" style={{ width: '18rem' }}>
    //         <Card.Img scr= {require("../../assets/images/emoji.anger.png")} />
    //           <Card.Body>
    //             <Card.Text>Card 1</Card.Text>
    //           </Card.Body>
    //         </Card>
    //         <Card bg="info" style={{ width: '18rem' }}>
    //         <Card.Img scr= {require("../../assets/images/emoji.anger.png")} />
    //           <Card.Body>
    //             <Card.Text>Card 2</Card.Text>
    //           </Card.Body>
    //         </Card>
    //         <Card bg="info" style={{ width: '18rem' }}>
    //         <Card.Img scr= {require("../../assets/images/emoji.anger.png")} />
    //           <Card.Body>
    //             <Card.Text>Card 3</Card.Text>
    //           </Card.Body>
    //         </Card>
    //         <Card bg="info" style={{ width: '18rem' }}>
    //         <Card.Img scr= {require("../../assets/images/emoji.anger.png")} />
    //           <Card.Body>
    //             <Card.Text>Card 4</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </CardDeck>
    //       </Row>
    //   </Container>

    //      {/* {this.state.images.map((image, index) =>

    //       <div key={index}>

    //         <img src={image.src} />
    //       </div>
    //     )} */}
    // );
    // )
// }
// }

// this.state.images.map((image, index) =>

// <div key={index}>
//   <img src={image.src}
//     alt=""
//     className="img-display" />
// </div>

export default ImageCards;