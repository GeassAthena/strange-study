# JS基础

### 1.**var** 和 **let**、**const** 的区别  
作用域： 

+ var 的作用域是全局作用域或函数作用域，在函数内部声明，函数内部可见，外部不可见。
+ let 作用域为块级作用域，通常为 **{}** 包围的代码块，块内部可见，外部不可见。  

变量提升：  

+ var 声明的变量有变量提升，在声明前访问会得到undefined。
+ let 声明的变量也有变量提升，在声明前访问会报 ReferenceError 错误，这被称为"暂时性死区"。
+ 变量提升的作用是避免变量污染，在块级作用域被同名全局变量覆盖。 

重复声明：
 + var 变量可以重复声明
 + let、const 在同一作用域不可重复声明，const在声明时即需要初始化变量，后续不可变更，指向唯一的内存对象地址。

### 2.变量的生命周期

+ 声明阶段（Declaration phase）
+ 初始化阶段（Initialization phase）
+ 分配/赋值阶段（Assignment phase）

这里可以解释let为什么有变量提升，但是又有暂时性死区，let变量的声明阶段提升了，但是初始化阶段没有提升

### 3.隐式全局变量

在函数内没有使用标志符var、let、const声明的变量称为隐式全局变量，没有变量提升，函数执行后升格为全局变量。

```javascript
function foo () {
    console.log(b) // ReferenceError
    b = 1
    console.log(b) // 1
}
foo()
console.log(b) // 1
```

### 4.函数声明

+ 函数声明和初始化都会被提升
+ 函数表达式不会被提升
+ 函数提升优先级最高，比变量提升更早

### 5.基本数据类型

+ 原始数据类型 number string boolean null undefined symbol bigint
+ 引用数据类型 Object

### 6.数组Array.from和Sread(...)展开运算符

+ Array.from 支持类数组和可迭代对象(即实现了iterator)
+ Sread展开运算符仅支持可迭代对象