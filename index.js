// Your code here

class Cat {
  constructor (name, sex){
    this.name = name 
    this.sex = sex
  }
  
   speak () {
return `${this.name} says meow!`

}
  
}

class Dog {
 constructor(name){
 this.name = name 
 }
 
 speak(){
   return `${this.name} says woof!`
 }
}

class Bird {
  constructor(name){
    return `It's me! ${this.name}, the parrot!`
  }
}