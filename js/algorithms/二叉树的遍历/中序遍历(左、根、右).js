// 中序遍历递归实现
export const inOrderIteration = function (root) {
    let res = []

    const dfs = (root) => {
        if (root) {
            dfs(root.left)
            res.push(root.val)
            dfs(root.right)
        }
    }

    dfs(root)

    return res
}

// 非递归
export const inOrderIteration2 = function (root) {
    let res = [], stack = [], cur = root

    while (stack.length || cur !== null) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        let temp = stack.pop()
        if (temp.right) {
            cur = temp.right
        }
        res.push(temp.val)
    }

    return res
}