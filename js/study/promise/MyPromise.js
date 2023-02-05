/**
 * Promise 只有三种状态 Pending Fulfilled Rejected, 并且一旦被resolve/reject,就不能迁移到其他状态即(immutable)
 *
 * @param {*} fn
 */
function Promise (fn) {
    let state = 'pending';
    let val = null;
    const callbacks = [];

    function handle(callback) {

    }

    this.then = function() {
        return new Promise((resolve, reject) => {
            handle()
        })
    }

    this.resolve = function () {}

    this.reject = function () {  }
}