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
  { id: 4, src: "images/emoji-winking.png", isClicked: false },
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
    message: "Click an image to begin!!!"
  }

  // Reset method to reset all images to unclicked, current score to 0 and shuffle the images.
  handleReset = () => {
    for (var i=0;i<images.length;i++) {
      images[i].isClicked = false;
    }
    this.setState({
      images: _.shuffle(images),
      currentScore: 0,
      message: "New Game"

    });
  }

  // Method to handle what happens when you click an image  
  handleClick = (id) => {
    const newImageArr = [];
    var newMessage = "";
    var newTopScore;
    console.log ("This State: ",this.state)
    // loop through the array of images and create an array of IDs so we can establish the index, as the image array shuffles each time
    this.state.images.forEach((image, i) => (
      newImageArr.push(image.id)
    ))
    let index = newImageArr.indexOf(id);
    // locate the exact image using array index syntax this.state.images[index]
    const newImages = this.state.images.slice();
    // // find the image that was clicked and update it's isClicked property
    const image = newImages[index];
    image.isClicked = !image.isClicked;

    if (!image.isClicked) {
      newMessage = "This image was already clicked!"
      alert("Game Over!")
      this.handleReset();
    }
    else {
      var newScore = this.state.currentScore + 1;
      newMessage = "Great job, that was a successful click!"
      console.log ("this.state.topscore: ",this.state.topScore)
      if (newScore > this.state.topScore) {
        newTopScore = newScore;
      }
      else {
        newTopScore = this.state.topScore;
      }
      console.log("Score: ", newScore);
      console.log ("New Top Score: ", newTopScore);

      if (newScore < 12) {
        newMessage = "Great job, that was a successful click!"
        this.setState({ images: _.shuffle(images), currentScore: newScore, topScore: newTopScore, message: newMessage });
      }
      else {
        newMessage = "Great job, that was a successful click!"
        alert("Winner winner chicken dinner, you clicked all the images")
        this.setState({ images: _.shuffle(images), currentScore: newScore, topScore: newTopScore, message: newMessage })
        this.handleReset();
      }
    }
  };

  render() {
    console.log ("new state in render: ",this.state)
    return (
      <div>
        <NavBar currentScore={this.state.currentScore} topScore={this.state.topScore} message={this.state.message}/>
        <Banner/>

        <Grid 
          className='imageGrid'
          style={{"margin": "5%"}}>
          <Grid.Row columns={4}>
            {this.state.images.map((image, i) => (
              <Grid.Column key={i}>
                <ImageCards className='emojiImages'
                  handleClick={this.handleClick}
                  id={image.id}
                  image={image.src}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App;
