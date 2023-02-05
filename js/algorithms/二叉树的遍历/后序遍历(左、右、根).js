// 后序遍历递归实现
export const postOrderIteration = function (root) {
    let res = []

    const dfs = (root) => {
        if (root) {
            dfs(root.left)
            dfs(root.right)
            res.push(root.val)
        }
    }

    dfs(root)

    return res
}

// 非递归
export const postOrderIteration2 = function (root) {
    let res = [], stack1 = [root], stack2 = []

    while (stack1.length) {
        let cur = stack1.pop()
        stack2.push(cur)
        if (cur.left) stack1.push(cur.left)
        if (cur.right) stack1.push(cur.right)
    }

    while (stack2.length) {
        res.push(stack2.pop().val)
    }

    return res
}