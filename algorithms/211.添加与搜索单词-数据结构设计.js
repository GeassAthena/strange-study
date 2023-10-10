/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start

var WordDictionary = function() {
  this.map = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.map;
  for (const ch of word) {
    if (!node[ch]) {
      node[ch] = {};
    }
    node = node[ch];
  }
  node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  let nodes = [this.map];
  for (const ch of word) {
    if (ch !== '.') {
      nodes = nodes.filter(node => node[ch]).map(node => node[ch]);
    } else {
      let newNodes = [];
      nodes.forEach(node => {
        newNodes.push(...Object.values(node));
      })
      nodes = newNodes;
    }
  }
  return nodes.some(node => node.isEnd);
};
["WordDictionary","addWord","addWord","addWord","addWord","search","search","addWord","search","search","search","search","search","search"]
,
[[],["at"],["and"],["an"],["add"],["a"],[".at"],["bat"],[".at"],["an."],["a.d."],["b."],["a.d"],["."]]
/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

