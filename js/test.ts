


type PickFunc = (a: Record<string, any>, ...keys: string[]) => Record<string, any>;
const pick: PickFunc = (a: Record<string, any>, ...keys: string[]) => {
    let copyObj:Record<string, any> = {}
    for (let key of keys) {
        let val = a[key]
        if (typeof(val) === 'object') {
            copyObj[key] = pick(val, ...Object.keys(val))
        } else {
            copyObj[key] = val
        }
    }
    return copyObj
};
const obj = { 
    a: "A",
    b: "B",
    c: {
        d: "D",
    },
};

console.assert(JSON.stringify(pick(obj, "a", "c")) === `{"a":"A","c":{"d":"D"}}`);

function flow (fn: (a: any) => any): (input: any) => any {
    return (i: any) => {
        if (arguments.length > 1) {
            
            return flow(...Array.from(arguments).splice(1))(fn(i))
        } else {
            return fn(i)
        }
    }
}
    
    