let hello = "hello"

let myAny ;

myAny = "hello"

myAny = 10;

let myStr = "hello again"

let myStr2:string = "hello world"

let num:number

num = 10

let num2 = 10

let bool = true

let bool2:boolean

bool2 = false

let myUnion:(number | string) = "hello"

myUnion = 10

let arr:number[] = [1]

let myTup: [string,number] = ["this",12]

myTup.push("hello")


interface Dog {
    name:string
}

let myDog:Dog = {
    name:"spark"
}

interface Pug extends Dog {
    epic:boolean
}

let myPug:Pug = {
    name:"Boss",
    epic:true
}

type stringNum = string | number

let thisVar:stringNum = "hello"

thisVar = 3


class BankAccount {
    uid
    private cash:number;
    constructor(uid:number, cash:number){
        this.uid = uid
        this.cash = cash
    }
    showMoney(){
        console.log(this.cash)
    }   
}

let myAccount = new BankAccount(1,100)

// console.log(myAccount.cash) cant't access private

myAccount.showMoney()


let myFunc = () => {
    console.log("hello")
}

const add = (a:number, b:number):number => {
    return a + b
}
const add2 = (a:number, b:number, c?:number):number => {
    return c? a + b + c : a + b
}

add2(1,2,3)

// GENERIC

let makeTypeArr = <T>(arg:T):T[] => {
    let arr:T[] = []
    arr.push(arg)
    return arr
}

console.log(makeTypeArr("hello"))
console.log(makeTypeArr(1))
console.log(makeTypeArr(()=>{}))
console.log(makeTypeArr(()=>{ return 1}))


