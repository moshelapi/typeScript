function sumOfeven(arr: number[]): number {
    let sum: number = 0
    for (let i of arr) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    return sum
}

function areaOfrectangle(hight: number, width: number): number {
    return hight * width
}

function isPalindrome(str: string): Boolean {
    const arr: string[] = str.split('')
    let end:number = arr.length-1
    for (let i: number = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[end]) { return false }
        end--
    } return true
}

function withoutDuplications(arr:number[]):number[]{
    let newArr:number[] = []
    for(let i of arr){
        if(!newArr.includes(i)){
            newArr.push(i)
        }
    }
    return newArr
}

interface person {
     firstName:string;
      lastName:string; 
    }



function firstInitial(obj:person):person{
    let newObj:person = {firstName:obj.firstName[0],
    lastName:obj.lastName[0]}
    return newObj
}


interface men{
    name:string;
    age:number;
}

function avrege(arr:men[]):number{
    let sum:number = 0
    for (let obj of arr){
        sum+=obj.age
    }
    return sum/arr.length
}

console.log(avrege( [
        { name: "John", age: 25 },
       { name: "Jane", age: 30 },
        { name: "Bob", age: 40 },]));


interface min_max{
    min:number;
    max:number;
}

function minAndMax(arr:number[]):min_max{
    let max:number = arr[0]
    let min:number = arr[0]
    for(let i of arr){
        if(i>max){max = i}
        if(i<min){min = i}
    }
    const a:min_max = {
        min:min,
        max:max
    }
    return a
}

function revers(arr:unknown[]):unknown[]{
    return arr.reverse()
}


