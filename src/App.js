import React, {
  Component
} from 'react';
import './App.css';
import Keyboard from './Keyboard';
import CurrentWord from './CurrentWord';


class App extends Component {

  state = {
    wordCollection: ["jolie", "garage", "magique", "licorne", "matin", "katana", "soleil", "hirondelle", "nuage"],
    currentWord: null,
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLocaleLowerCase().split(''),
    usedLetter: [],
    win: 0,
    attempt: 0,
  }

  componentDidMount() {

    window.addEventListener("keyup", (e) => {
      if (e.keyCode == 13) {
        this.initGame()
      }
      console.log(e)

    })


    this.initGame()
  }

  clickLetter = (letter) => {

    if (this.state.usedLetter.indexOf(letter) === -1) {
      //populate user letter (for prevent multiple click on same letter)
      const usedLetter = [letter, ...this.state.usedLetter]

      //calcul attempt
      let attempt = this.state.attempt
      if (this.state.currentWord.indexOf(letter) === -1) {
        attempt = this.state.attempt + 1

      }

      //calcul win state
      let win = 1
      for (let i = 0; i < this.state.currentWord.length; i++) {
        if (usedLetter.indexOf(this.state.currentWord[i]) === -1) {
          win = 0

        }
      }

      //calcul lost state 
      if (attempt >= 9 && win === 0) {
        win = -1
      }

      //update state
      this.setState({ usedLetter, attempt, win })
    }

  }
  // pickNewWord = () => {
  //   const randomIndex = Math.floor(Math.random() * this.state.wordCollection.lenght)
  //   return this.state.wordCollection[ randomIndex ]
  // }

  initGame = () => {

    this.setState({
      currentWord: this.pickNewWord,
      usedLetter: [],
      win: 0,
      attempt: 0,
    })

  }

  render() {
    return (
      <div id="game">

        <h1 > pendu </h1>

        win = {
          this.state.win
        } <br />
        attempt = {this.state.attempt
        }


        {
          (this.state.currentWord !== null) &&

          <CurrentWord
            currentWord={this.state.currentWord}
            usedLetter={this.state.usedLetter}
            win={this.state.win}


          />

        }
        {
          this.state.win == 0 &&
          <Keyboard
            alphabet={this.state.alphabet}
            usedLetter={this.state.usedLetter}
            action={this.clickLetter}
          />


        }
      </div>
    )
  }
}

export default App;