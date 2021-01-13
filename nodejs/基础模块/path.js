const { join } = require('path')
const path = require('path')

// 获取路径最后一部分的path
let basename = path.basename('/foo/bar/baz/asdf/quux.html')
console.log(basename)
// 获取文件目录名
console.log(path.dirname(basename))
// 获取文件拓展名
console.log(path.extname('/foo/bar/baz/asdf/quux.html'))
// 可选文件拓展名
basename = path.basename('/foo/bar/baz/asdf/quux.html', '.html')
console.log(basename)
// delimiter提供特定于平台的路径界定符,对于Windows;  对于POSIX: .
// sep 提供路径片段分隔符 win \ , posix /   
console.log(path.delimiter)
console.log(path.sep)

console.log(process.env.PATH.split(path.delimiter));

// 路径解析 path.format & path.parse
// 操作对象是pathObject <对象>，属性有优先级，dir存在是忽略root，base存在时忽略name和ext
//      dir <string>
//      root <string>
//      base <string>
//      name <string>
//      ext <string>
let pathObj = {
    root: '\\nodejs\\',
    name: 'test',
    ext: '.txt'
}
console.log(path.format(pathObj))
console.log(path.parse('/nodejs/test.txt'))

// 判断是否绝对路径，如果传入参数为空字符串，返回false
console.log(path.isAbsolute('/js'))

// path.join([...paths]) 将数组中的路径使用平台特定分隔符连接,然后规范化路径作为返回结果
let paths = ['/foo', 'bar', 'baz/asdf', 'quux', '..']
console.log(path.join(...paths))
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))

// path.resolve([...paths]) 给定路径序列从右向左构建，后面的每个 path 会被追加到前面，直到构造出绝对路径。
console.log(path.resolve(...paths))