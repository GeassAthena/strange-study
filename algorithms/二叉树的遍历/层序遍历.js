const levelOrder = function (root) {

}

export const levelOrder2 = function (root) {
    let res = [];
    let queue = [root];

    while (queue.length) {
        let temp = [];
        let len = queue.length;

        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            temp.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        res.push(temp);
    }

    return res;
}