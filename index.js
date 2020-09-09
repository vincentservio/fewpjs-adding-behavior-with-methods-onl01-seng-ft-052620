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
    this.name
  }
    speak(){
    return `It's me! ${this.name}, the parrot!`
  }
}



// describe("bird", () => {
//   beforeEach(() => {
//     bird = new Bird("Pablo", "male")
//     bird2 = new Bird("Mable", "female")
//   })
  
//   it("has a class of Bird", () => {
//     expect(new Bird()).to.be.an.instanceof(Bird);
//   })
//   it("bird.speak() returns 'It's me! [name], the parrot!'", () => {
//     expect(bird.speak()).to.eq('It\'s me! Pablo, the parrot!')
//   })
//   it("bird2.speak() returns 'Squawk!'", () => {
//     expect(bird2.speak()).to.eq('Mable says squawk!')
//   })
// })
