
function tuple<T, U>(arg1: T, arg2: U): [T, U] {
    return [arg1, arg2];
}

const getValue = <T, K extends keyof T>(obj: T, key: K): T[K] =>{
    return obj[key];
}