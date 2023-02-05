
// interface ITreeNode {
//   name: string
//   child?: ITreeNode[]
// }

const tree = [{
  name: '1',
  child: [{
      name: '11',
      child: [{
          name: '111'
      },
      {
          name: '112'
      },
      {
          name: '113'
      }]
  }, {
      name: '2',
      child: [{
          name: '21',
          child: [{
              name: '211'
          }]
      }]
  }, {
      name: '3'
  }]
}]

function tree2List(tree) {
  let res = []

  const dfs = (tree) => {
    if (tree.length === 0) return
    tree.forEach(node => {
      res.push(node)
      if (node.child && Array.isArray(node.child)) {
        dfs(node.child)
      }
    })
  }
  
  dfs(tree)

  return res
}


function list2Tree(list) {
  if (list.length === 0) return []
  let tree = [Object.assign({}, list[0])]

  let i = 1, j = 0
  while (i < list.length) {
    if (list[i]) {
      
    }
    i++
  }

  return tree
}


const list = tree2List(tree)
const tree2 = list2Tree(list)