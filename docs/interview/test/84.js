let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 },
]

function convert(list) {
  const _map = new Map()
  return list.reduce((pre, cur) => {
    _map.set(cur.id, cur)
    if (_map.has(cur.parentId)) {
      ;(
        _map.get(cur.parentId).children ||
        (_map.get(cur.parentId).children = [])
      ).push(cur)
      return pre
    }
    return [...pre, cur]
  }, [])
}

console.log('convert(list)', convert(list))
