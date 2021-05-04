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
}

module.exports = Letter;
