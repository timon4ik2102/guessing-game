class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    // we understand, in what square is our searching target
    guess() {
        return this.mid = Math.round((this.min + this.max) / 2);
    }
    // if searching target is lower ot greater than middle, we assign different value
    lower() {
        this.max = this.mid;
    }

    greater() {
        this.min = this.mid;

    }
}

module.exports = GuessingGame;