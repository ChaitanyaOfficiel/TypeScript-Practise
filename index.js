// typescript is an opensource and subset of JavaScript 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Dynamic typed languages, the types are associated with run times values and not named expilicity in your code
// static types langauages , you expilicity assign types to variable, function parameters,return values and etc.
// static example : Java, C, C++, RUST
// Dynamic example : JavaScript, Python, Ruby and PHP
// var id:number = 8;
// let company:string = 'Nous application'
// let isPublished:boolean = true
// let x : any = 'Hello'
// let ids:number[] = [1,2,3,4,5]
// let arr:any[]=[1,"something",true]
// tuple 
// let person:[number,string,boolean] = [1,"geralt",true]
// tuple array 
// let empolyee:[number,string][] 
// empolyee = [
//       [1,"chaitanya"],
//       [1,"chaitanya"],
//       [1,"chaitanya"]
// ]
// union 
// let id: string| number 
// id = "22"
// enumators
// it allows us to find a constant of numerical constant either in string or numbers
// enum Driection1{
//       Up,
//       Down,
//       Left,
//       Right
// }
// objects 
// const User : {
//       id:number,
//       name:string
// }
// const user: User {
//       id:1,
//       name:'Chetan'
// }
// Type assertion 
// let cid:any=1
// let custormerId = cid as number
// function 
function addNum(x, y) {
    return x + y;
}
var user1 = {
    id: 1,
    name: 'John'
};
user1.name = 'chaitanya';
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registerd");
    };
    return Person;
}());
var chaitanya = new Person(1, 'Geralt');
var geralt = new Person(2, 'Gerald');
// console.log(chaitanya.register())
// console.log(geralt, chaitanya)
var Empolyee = /** @class */ (function (_super) {
    __extends(Empolyee, _super);
    function Empolyee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Empolyee;
}(Person));
var emp = new Empolyee(3, 'shawn', 'Developer');
// console.log(emp)
// Generics 
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4, 5]);
var strArray = getArray(['chaitanya', 'geralt', 'suzy']);
strArray.push('hello');
console.log(numArray, strArray);
