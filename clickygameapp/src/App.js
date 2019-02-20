import React, { Component } from 'react';
import _ from 'underscore';
// import logo from './logo.svg';
import './App.css';
// import '../semantic/dist/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ImageCards from "./components/ImageCards";
// import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const images = [
  { id: 1, src: "images/emoji-anger.png", isClicked: false },
  { id: 2, src: "images/emoji-big-eyes.png", isClicked: false },
  { id: 3, src: "images/emoji-blushing.png", isClicked: false },
  { id: 4, src: "images/emoji-crying.png", isClicked: false },
  { id: 5, src: "images/emoji-goofy.png", isClicked: false },
  { id: 6, src: "images/emoji-love-heart.png", isClicked: false },
  { id: 7, src: "images/emoji-nerd-glasses.png", isClicked: false },
  { id: 8, src: "images/emoji-sadness.png", isClicked: false },
  { id: 9, src: "images/emoji-tears-of-joy.png", isClicked: false },
  { id: 10, src: "images/emoji-teethy-grin.png", isClicked: false },
  { id: 11, src: "images/emoji-the-thinker.png", isClicked: false },
  { id: 12, src: "images/emoji-zipper-mouth.png", isClicked: false }
]

// console.log (images);

const shuffledImages = _.shuffle(images)

console.log(shuffledImages);

class App extends Component {
  state = {
    images: shuffledImages,
    currentScore: 0,
    topScore: 0,
    result: ""
  }

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      result: ""
    });
  }

  handleClick = (id) => {
    // find the index of the image that was clicked
    const newImageArr = [];
    this.state.images.map((image, i) => (
      newImageArr.push(image.id)
    ))
    let index = newImageArr.indexOf(id);
    // console.log ("New Image Arr", newImageArr);
    console.log("Index: ", index);
    // locate the exact image using array index syntax this.state.images[index]
    // this.state.images[index]
    const newImages = this.state.images.slice();
    // // find index and change isClicked property for that image
    const image = newImages[index];
    image.isClicked = !image.isClicked;
    console.log("after update: ", image)

    if (!image.isClicked) {
      this.result = "Game Over!"
      alert(this.result)
      this.setState({ images: newImages })
      this.handleReset();
    }
    else {
      var newScore = this.state.currentScore + 1;
      console.log("Score: ", newScore);
      if (newScore === 12) {
        this.result = "Winner winner chicken dinner, you clicked all the images";
        alert(this.result)
      }
      else {
        this.setState({ images: newImages })
      }

      this.setState({ images: newImages, currentScore: newScore, result: "" });
    }
    };

    // handleIncrement = () => {
    //   let newScore = this.state.currentScore + 1;
    //   this.setState({
    //     currentScore: newScore,
    //     result: ""
    //   });
    //   if (newScore >= this.state.topScore) {
    //     this.setState({ topScore: newScore });
    //   }
    //   else if (newScore === 12) {
    //     this.setState({ result: "You Win!" });
    //   }
    //   // this.handleShuffle();
    // };



    render() {
      return (
        <div>
          <NavBar score={this.setState.newScore} />
          <Banner />
          <Container>
            <Row>
              {this.state.images.map((image, i) => (
                <Col key={i}>
                  <ImageCards
                    handleClick={this.handleClick}
                    id={image.id}
                    image={image.src}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )
    }
  }

  export default App;
