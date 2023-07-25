# HTML基础知识

2. window.onload 和 $(document).ready()
  + window.onload 在所有资源文件加载完成之后执行，并且只能绑定一个执行函数，后续设置会覆盖前面的。
  + $(document).ready() dom解析完成之后执行，可设置多个处理函数，按添加顺序执行。
  + 通常$(document).ready()会比window.onload更早执行。