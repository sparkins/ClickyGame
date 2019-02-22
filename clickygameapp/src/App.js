import React, { Component } from 'react';
import _ from 'underscore';
import './App.css';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ImageCards from "./components/ImageCards";
import { Grid } from 'semantic-ui-react'


// Array of objects to store the images, their ids and there initial clicked state
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

// class to store the app states and methods
class App extends Component {
  state = {
    images: _.shuffle(images),
    currentScore: 0,
    topScore: 0,
  }

  // Reset method to reset all images to unclicked, current score to 0 and shuffle the images.
  handleReset = () => {
    for (var i=0;i<images.length;i++) {
      images[i].isClicked = false;
    }
    this.setState({
      images: _.shuffle(images),
      currentScore: 0,
    });
  }
  // Method to handle what happens when you click an image  
  handleClick = (id) => {
    const newImageArr = [];
    var result = "";
    // loop through the array of images and create an array of IDs so we can establish the index, as the image array shuffles each time
    this.state.images.map((image, i) => (
      newImageArr.push(image.id)
    ))
    let index = newImageArr.indexOf(id);
    // locate the exact image using array index syntax this.state.images[index]
    const newImages = this.state.images.slice();
    // // find the image that was clicked and update it's isClicked property
    const image = newImages[index];
    image.isClicked = !image.isClicked;
    console.log("after update: ", image)

    if (!image.isClicked) {
      result = "Game Over!"
      alert(result)
      // this.setState({ images: newImages })
      this.handleReset();
    }
    else {
      var newScore = this.state.currentScore + 1;
      console.log("Score: ", newScore);
      if (newScore === 12) {
        result = "Winner winner chicken dinner, you clicked all the images";
        alert(result)
        this.setState({ images: _.shuffle(images), currentScore: newScore });

      }
      else {
        this.setState({ images: _.shuffle(images) })
      }

      this.setState({ images: _.shuffle(images), currentScore: newScore, result: "" });
    }
  };

  render() {
    return (
      <div>
        <NavBar score={this.setState.newScore} />
        <Banner />
        {/* <Container>
            <Row> */}
        <Grid>
          <Grid.Row columns={4}>
            {this.state.images.map((image, i) => (
              // <Col key={i}>
              <Grid.Column key={i}>
                <ImageCards
                  handleClick={this.handleClick}
                  id={image.id}
                  image={image.src}
                />
                {/* </Col> */}
              </Grid.Column>
            ))}
            {/* </Row>
          </Container> */}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App;
