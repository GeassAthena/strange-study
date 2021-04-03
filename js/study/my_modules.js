let MyModules = (function manager() {
    let modules = {}

    function define(name, deps, impl) {
        for (let i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]]
        }
        modules[name] = impl.apply(impl, deps)
    }

    function get(name) {
        return modules[name]
    }
    return {
        define: define,
        get: get
    }
})()

MyModules.define('bar', [], function () {
    function hello(who) {
        return 'Let me introduce: ' + who
    }
    return {
        hello: hello
    }
})
MyModules.define('foo', ['bar'], function (bar) {
    let hungry = 'hippo'

    function aowsome() {
        console.log(bar.hello(hungry).toUpperCase())
    }

    return {
        aowsome: aowsome
    }
})

let bar = MyModules.get('bar')
let foo = MyModules.get('foo')
console.log(bar.hello('hippo'))
foo.aowsome()
console.log(MyModules.modules)