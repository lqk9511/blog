// LazyMan('Tony')
// Hi I am Tony

// LazyMan('Tony').sleep(10).eat('lunch')
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

// LazyMan('Tony').eat('lunch').sleep(10).eat('dinner')
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

// LazyMan('Tony')
//   .eat('lunch')
//   .eat('dinner')
//   .sleepFirst(5)
//   .sleep(10)
//   .eat('junk food')
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food

class LazyManClass {
  constructor(name) {
    this.name = name
    console.log(`Hi I am ${this.name}`)
    this.tasks = []
    setTimeout(() => this.next())
  }

  sleepFirst(time) {
    var fn = ((t) => () =>
      setTimeout(() => {
        console.log(`等待了${time}秒...`)
        this.next()
      }, t * 1000))(time)

    this.tasks.unshift(fn)
    return this
  }

  sleep(time) {
    var fn = ((t) => () =>
      setTimeout(() => {
        console.log(`等待了${time}秒...`)
        this.next()
      }, t * 1000))(time)

    this.tasks.push(fn)
    return this
  }

  eat(food) {
    var fn = ((f) => () => {
      console.log(`I am eating ${f}`)
      this.next()
    })(food)
    this.tasks.push(fn)
    return this
  }

  next() {
    var fn = this.tasks.shift()
    fn && fn()
  }
}

function LazyMan(name) {
  return new LazyManClass(name)
}

LazyMan('Tony')
LazyMan('Tony').sleep(10).eat('lunch')
LazyMan('Tony').eat('lunch').sleep(10).eat('dinner')
LazyMan('Tony')
  .eat('lunch')
  .eat('dinner')
  .sleepFirst(5)
  .sleep(10)
  .eat('junk food')
