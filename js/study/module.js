function FooModule() {
    let something = 'you call foo module'
    let other = [1, 2, 3]
    function doSomething(){
        console.log(something)
    }
    function doOther(){
        console.log(other.join())
    }
    return{
        doSomething: doSomething,
        doOther: doOther
    }
}

let foo = FooModule()
foo.doSomething()
foo.doOther()