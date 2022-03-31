/*
 * Module模式最初被定义为一种在传统软件工程中为类提供私有和共有封装的方法。通过这种方式，能
 * 够使一个单独的对象拥有共有/私有方法和变量，从而屏蔽来自全局作用局的特殊部分。
 */

var orderModule = (function () {
  var orderNum = 1;

  return {
    getNum: function () {
      return orderNum;
    },
    addNum: function () {
      orderNum = orderNum + 1;
    },
    subNum: function () {
      orderNum = orderNum > 1 ? orderNum - 1 : orderNum;
    }
  }
})();

orderModule.getNum();