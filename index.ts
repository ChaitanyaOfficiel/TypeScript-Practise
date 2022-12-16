// typescript is an opensource and subset of JavaScript 

// Dynamic typed languages, the types are associated with run times values and not named expilicity in your code
// static types langauages , you expilicity assign types to variable, function parameters,return values and etc.

// static example : Java, C, C++, RUST
// Dynamic example : JavaScript, Python, Ruby and PHP
// Basic Types
let id:number = 5

let company:string = 'Nous application'
 
let isPublished:boolean = true

let x : any = 'Hello'

let ids:number[] = [1,2,3,4,5]
let arr:any[]=[1,"something",true]
// tuple 
let person:[number,string,boolean] = [1,"geralt",true]

// tuple array 
let empolyee:[number,string][] 
empolyee = [
      [1,"chaitanya"],
      [1,"chaitanya"],
      [1,"chaitanya"]
]

// union 
let id: string| number 
id = "22"


// enumators
// it allows us to find a constant of numerical constant either in string or numbers
enum Driection1{
      Up,
      Down,
      Left,
      Right
}

// objects 
type User = {
      id: number
      name: string
}
const user:  User = {
      id:1,
      name:'Chetan'
}

// Type assertion 
let cid:any=1
let custormerId = cid as number
// function 
function addNum(x: number,y: number):number{
      return x + y
}
console.log(addNum(12,13))

// interfaces
interface userInterface {
    readonly  id:number,
      name:string,
      age?:number
}
const user1: userInterface = {
      id:1,
      name:'John'
}

user1.name = 'chaitanya'

interface MathFunc{
      (x: number, y: number): number
}

const add : MathFunc = (x : number, y: number): number => x + y
const sub : MathFunc = (x : number, y: number): number => x - y

class Person {
      id:number
      name: string

      constructor(id: number, name: string){
      this.id = id
      this.name = name
      }
    register(){
      return `${this.name} is now registerd`
    }  
}

const chaitanya = new Person(1, 'Geralt')
const geralt = new Person(2,'Gerald')
// console.log(chaitanya.register())
// console.log(geralt, chaitanya)

class Empolyee extends Person{
      position:string
      constructor(id: number, name: string, position:string){
            super(id,name)
            this.position = position
      }

}
const emp = new Empolyee(3, 'shawn','Developer')
console.log(emp)

// Generics 
function getArray<T>(items: T[]): T[]{
      return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(['chaitanya','geralt','suzy'])
strArray.push('hello')
console.log(numArray,strArray)
