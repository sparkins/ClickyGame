import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ImageCards from "./components/ImageCards";

const images = [
          { id: 1, src: "../emoji.anger.png", isClicked: false },
          { id: 2, src: "../emoji.big-eyes.png", isClicked: false },
          { id: 3, src: "../emoji.blushing.png", isClicked: false },
          { id: 4, src: "../emoji.crying.png", isClicked: false },
          { id: 5, src: "../emoji.goofy.png", isClicked: false },
          { id: 6, src: "../emoji.love-heart.png", isClicked: false },
          { id: 7, src: "../emoji.nerd-glasses.png", isClicked: false },
          { id: 8, src: "../emoji.sadness.png", isClicked: false },
          { id: 9, src: "../emoji.tears-of-joy.png", isClicked: false },
          { id: 10, src: "../emoji.teethy-grin.png", isClicked: false },
          { id: 11, src: "../emoji.the-thinker.png", isClicked: false },
          { id: 12, src: "../emoji.zipper-mouth.png", isClicked: false }
        ]

// console.log (images);

function shuffleImages(imageArr) {
  let myImageArr = imageArr;
  // console.log(myImageArr)
  let newImageArr =[];
  for (let i = myImageArr.length; i > 0; i--) {
    let index = Math.floor(Math.random() * (i + 1));
    newImageArr.push(imageArr[index]);
    myImageArr.splice[index, 1];
    console.log (myImageArr);

  }
  console.log (newImageArr);
  console.log (myImageArr);

  return newImageArr;
};

shuffleImages(images);

class App extends Component {
  state = {
    images,
    currentScore: 0,
    topScore: 0,
    result: "",
    isClicked: []
  }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    }
    else {
      this.handleReset();
    }
    };

  handleShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({ images: shuffledImages})
  };

  handleIncrement = () => {
    let newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      result: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore});
    }
    else if (newScore === 12) {
      this.setState ({ result: "You Win!"});
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState ({
      currentScore: 0,
      topScore: this.state.topScore,
      result: "",
      clicked: []
    });
  }

  render() {
      return (
        <div>
          <NavBar score={this.state.score} />
          <Banner />
          {/* <ImageCards /> */}
        </div>
        )
  }
}

export default App;
