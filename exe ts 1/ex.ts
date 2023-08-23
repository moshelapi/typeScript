function returnBigger(num1: number, num2: number): number {
    return num1 > num2 ? num1 : num2;
}

function printBigger(num1: number, num2: number): void {
    num1 > num2 ? console.log(num1) : console.log(num2);
}

function ifEven(num: number): string {
    return num % 2 === 0 ? 'isEven' : "isOdd"
}

function lengthOfstring(str: string): number {
    return str.length
}

function arrayOfNumber(num: number): number[] {
    const arr: number[] = []
    for (let i: number = 0; i < num; i++) {
        arr.push(i)
    }
    return arr
}

function maxOfArray(arr: number[]): number {
    let max: number = 0
    for (let i of arr) {
        if (i > max) { max = i }
    }
    return max
}

 type Person = { name: string, age: number, isStudent: boolean }


 function printPerson(obj:Person):void{
    console.log(obj);
 }

function isMinor(obj:Person):boolean{
    return obj.age<18? true :false ;
}

interface Book {
    title:string;
    author:string ;
    year:number;
}

type Reader = Person &{
    favoriteBook : Book
}

function olderReader(arr:Reader[]):number{
    let oldRedear:number = 0
    for(let obj of arr){
        if(obj.age>oldRedear){
            oldRedear = obj.age
        }
    }
    return oldRedear
}
function oldBook(arr: Reader[]): Book {
    let olderYear: number = 2023;
    for (let obj of arr) {
        if (obj.favoriteBook.year < olderYear) {
            olderYear = obj.favoriteBook.year;
        }
    }
    const index:number = arr.findIndex(obj => obj.favoriteBook.year === olderYear)

    return arr[index].favoriteBook;
}

