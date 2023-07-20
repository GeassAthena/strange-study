### JQUERY
基础语法
$(selector).action
jq的语法是XPath和css选择器语法结合
文档就绪事件，防止文档未完全加载就执行jq代码，涉及到DOM操作有可能会失败
```javascript
$(document).ready(function () {
    // jq代码
})
$(function () {})

// 类似onload，onload是所有资源加载完成,jq ready是DOM加载完成后执行

window.onload = function () {
    // 执行代码
}
```

#### jq选择器
基于元素的 id、类、类型、属性、属性值等"查找"（或选择）HTML 元素
#### jq常用方法
```JavaScript
// CSS相关
hide()
show()
toggle()
```