const data = [
  {
    id: '1',
    name: 'test1',
    children: [
      {
        id: '11',
        name: 'test11',
        children: [
          {
            id: '111',
            name: 'test111',
          },
          {
            id: '112',
            name: 'test112',
          },
        ],
      },
      {
        id: '12',
        name: 'test12',
        children: [
          {
            id: '121',
            name: 'test121',
          },
          {
            id: '122',
            name: 'test122',
          },
        ],
      },
    ],
  },
]

function findIdPath(id, target) {
  const match = target.find((item) => item.id === id)
  if (match) return [id]
  const _sub = target.find((item) => id.startsWith(item.id))
  return [_sub.id].concat(findIdPath(id, _sub.children))
}

console.log(findIdPath('112', data))

// 广度优先遍历

function bfs(id, target) {
  let queue = [...target]

  while (queue.length) {
    const current = queue.shift()
    if (current.children) {
      queue.push(
        ...current.children.map((_) => ({
          ..._,
          parent: `${current.parent || current.id},${_.id}`,
        }))
      )
    }
    if (current.id === id) return (current.parent || current.id).split(',')
  }
  return []
}

console.log(bfs('112', data))
