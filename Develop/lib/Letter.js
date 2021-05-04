class Letter {
  constructor(letter) {
      this.letter = letter;
      this.special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '[', ']', ';', '?']
      this.special.forEach((char) => {
        if(letter === char) {
            this.visible = true;
        } else {
            this.visible = false;
        }
      })
  }

  toString() {
      return this.letter = '_'
  }

  guess(guessLetter) {
      if(guessLetter === this.letter) {
          return true
      } else {
          return false
      }
  }
}

module.exports = Letter;
