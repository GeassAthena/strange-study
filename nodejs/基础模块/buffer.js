// Buffer类是JavaScript的Unit8Array的子类，位于全局作用域，无需引入

// 创建长度为10字节的buffer
// buffer创建 Buffer(), new Buffer(), Buffer.alloc(), Buffer.allocUnsafe(), Buffer.from()，不推荐前两种
// 默认填充0，可以设置
const buffer1 = Buffer.alloc(10)
const buffer2 = Buffer.alloc(10, 1)
const buffer3 = Buffer.allocUnsafe(10)
console.log(buffer2)