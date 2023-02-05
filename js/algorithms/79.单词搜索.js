/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let n = board.length, m = board[0].length

    let visited = new Array(n)
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(m).fill(false)
    }

    const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]

    const backTrace = (i, j, start) => {
        if (board[i][j] != word.charAt(start)) {
            return false
        }
        if (start === word.length - 1) {
            return true
        }

        visited[i][j] = true
        let result = false
        for(let [dx, dy] of directions) {
            let newi = dx + i, newj = dy + j
            if (newi >= 0 && newi < n && newj >= 0 && newj < m) {
                if (!visited[newi][newj]) {
                    let flag = backTrace(newi, newj, start + 1)
                    if (flag) {
                        result = true
                        break
                    }
                }
            }
        }

        visited[i][j] = false;
        return result
    }

    for (let i = 0;i < n; i++) {
        for (let j = 0;j < m; j++) {
            let flag = backTrace(i, j, 0)
            if (flag) {
                return true
            }
        }
    }

    return false
};

// exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")
// @lc code=end