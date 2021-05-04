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
      if(this.visible === true) {
          return this.letter
      } else {
            return this.letter = '_'
      }
      
  }

  guess(guessLetter) {
      if(guessLetter === this.letter) {
        this.visible = true;
          return true
      } else {
          return false
      }
  }

  getSolution () {
      return this.letter
  }
}

module.exports = Letter;
