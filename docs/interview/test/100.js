// (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)

function shuffle(queue) {
  console.log('shuffle -> queue', queue)
  let _res = [],
    _index = 1,
    _topValue
  while (queue.length) {
    _topValue = queue.pop()
    if (_index % 2) {
      _res.push(_topValue)
    } else {
      queue.unshift(_topValue)
    }
    _index++
  }
  return _res
}

function recover(stack) {
  let _res = [],
    _index = 1

  while (stack.length) {
    if (_index % 2) {
      _res.unshift(stack.shift())
    } else {
      _res.unshift(stack.pop())
    }
    _index++
  }

  return _res
}

console.log(shuffle(recover([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
