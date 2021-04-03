/**Implement a basic calculator to evaluate a simple expression string.
The expression string contains only non-negative integers, +, -, *, / operators 
and empty spaces . The integer division should truncate toward zero.
Example 1:Input: "3+2*2"Output: 7
Example 2:Input: " 3/2 "Output: 1
Example 3:Input: " 3+5 / 2 "Output: 5
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let strs = s.split(/(\d+)/)
    console.log(strs)
    let symbol_stack = []
    let data_stack = []
    let res = 0
    for (let i = 0; i < strs.length;) {
        let temp = strs[i]
        if (temp == '') continue
        if (temp == '+' || temp == '-') {
            symbol_stack.push(temp)
        }
        if (temp == '*' || temp == '/') {
            
        }
    }
}
calculate('111+1*1')