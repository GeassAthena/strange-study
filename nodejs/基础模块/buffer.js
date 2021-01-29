// Buffer类是JavaScript的Unit8Array的子类，位于全局作用域，无需引入


// buffer创建 Buffer(), new Buffer(), Buffer.alloc(size, fill, encoding), Buffer.allocUnsafe(size), Buffer.from()，不推荐前两种
// 创建长度为10字节的buffer，默认填充0，可以设置
const buffer1 = Buffer.alloc(10)
const buffer2 = Buffer.alloc(10, 1)
// 创建大小为10字节的未初始化的缓冲区，可能包含敏感旧数据。但是比alloc快
const buffer3 = Buffer.allocUnsafe(10)
console.log(buffer2)

// buffer数据可以指定字符编码，通过指定字符编码，buffer还可以和js字符串进行转换，默认使用utf-8
const buffer_ascii = Buffer.from('hello', 'ascii')
console.log(buffer_ascii.toString('binary'))
// buffer支持的字符编码包括utf8,utf16le,base64,hex,ascii,binary(latin1的别名),usc2(utf16le)

// buffer.compare(buf1, buf2) = buf1.compare(buf2)
// Buffer.concat([bufs]) 返回一个合并了bufs中所以buf的新buffer实例