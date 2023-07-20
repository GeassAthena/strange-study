// 前序遍历递归实现
export const preOrderIteration = function (root) {
    let res = []

    const dfs = (root) => {
        if (root) {
            res.push(root.val)
            dfs(root.left)
            dfs(root.right)
        }
    }

    dfs(root)

    return res
}

// 非递归
export const preOrderIteration2 = function (root) {
    let res = [], stack = [root]

    while (stack.length) {
        let cur = stack.pop()
        if (cur) {
            if (cur.right) stack.push(cur.right)
            if (cur.left) stack.push(cur.left)
            res.push(cur.val)
        }
    }

    return res
}