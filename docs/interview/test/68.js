// ’AbC' 变成 'aBc'

let str = 'AbC'

function invertCase(str) {
  let arr = str.split('')
  arr = arr.map((item) =>
    item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()
  )
  return arr.join('')
}

// invertCase(str)

// or

str = str.replace(/[a-zA-Z]/g, (_) =>
  /[a-z]/.test(_) ? _.toUpperCase() : _.toLowerCase()
)

console.log(str)
