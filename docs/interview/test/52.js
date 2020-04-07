const proxyObject = {
  name: 'Jeff9511',
}

Object.defineProperty(proxyObject, 'name', {
  get() {
    return this.text
  },
  set() {
    this.text = '我被劫持了'
  },
  configurable: true,
  enumerable: true,
})
proxyObject.name = 'Jeff0001'
console.log(proxyObject.name)
