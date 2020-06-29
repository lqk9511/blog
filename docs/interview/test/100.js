// (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)

function shuffle(queue) {
  let _res = [],
    _index = 1,
    _topValue
  while (queue.length) {
    _topValue = queue.shift()
    if (_index % 2) {
      _res.push(_topValue)
    } else {
      queue.push(_topValue)
    }
    _index++
  }
  return _res
}

function recover(arr) {
  let _res = [],
    _index = 1

  while (arr.length) {
    if (_index % 2) {
      _res.unshift(arr.pop())
    } else {
      _res.unshift(_res.pop())
    }
    console.log('recover -> _res', _res)

    _index++
  }

  return _res
}

let _shuffleVal = shuffle([1, 12, 2, 8, 3, 11, 4, 9, 5, 13, 6, 10, 7])

console.log(_shuffleVal)

console.log(recover(_shuffleVal))
