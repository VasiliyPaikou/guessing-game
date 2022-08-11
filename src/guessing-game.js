class GuessingGame {
  constructor() {
    this.min = 0
    this.max = 0
    this.nums = []
  }
  setRange(min, max) {
    this.min = min
    this.max = max
    while (min !== max) {
      this.nums.push(min)
      min++
    }
    this.nums.push(max)
  }
  guess() {
    this.result = Math.round((this.max - this.min)/2) + this.min;
      return this.result

  }
  lower() {
    this.max = this.result
  }
  greater() {
    this.min = this.result
}
}
module.exports = GuessingGame;
