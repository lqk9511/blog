class MyNumber {
  constructor(value) {
    this.value = value
  }

  add(num) {
    return new MyNumber(this.value + num)
  }

  minus(num) {
    return new MyNumber(this.value - num)
  }
}

console.log(new MyNumber(5).add(3).minus(2))

Number.prototype.add = function(num) {
  return this + num
}

Number.prototype.minus = function(num) {
  return this - num
}
