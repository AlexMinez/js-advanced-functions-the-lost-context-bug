// let configuration = {
//   frontContent: "Happy Birthday, Odin One-Eye!",
//   insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
//   closing: {
//       "Thor": "Admiration, respect, and love",
//       "Loki": "Your son"
//   },
//   signatories: [
//       "Thor",
//       "Loki"
//   ]
// }

// let printCard = function() {
//   console.log(this.frontContent)
//   console.log(this.insideContent)
//   // Wow! Elegant! And notice the arrow function's `this` is the same
//   // this that printCard has by virtue of configuration being passed
//   // in as a thisArg
//   this.signatories.forEach(s => console.log(`${this.closing[s]}, ${s}`)
//   )
// }

// printCard.call(configuration)


let newConfig = {
  name: "Alex",
  age: 'Hello World',
  closing: {
    "greet": "hello",
    "goodbye": "goodbye"
  },
  signatories: [
    "greet",
    "goodbye"
  ]
}
let newPrintCard = function(){
  console.log(this.name)
  console.log(this.age)

  this.signatories.forEach(s => console.log(`${this.closing[s]}, ${s}`)
  )
}
newPrintCard.call(newConfig)


// let configuration = {
//   frontContent: "Alex",
//   insideContent: "Hello World",
//   closing: {
//       "Dog": "I am a dog",
//       "Cat": "I am a cat"
//   },
//   signatories: [
//       "Dog",
//       "Cat"
//   ]
// }

// let printCard = function() {
//   console.log(this.frontContent)
//   console.log(this.insideContent)
//   // Wow! Elegant! And notice the arrow function's `this` is the same
//   // this that printCard has by virtue of configuration being passed
//   // in as a thisArg
//   this.signatories.forEach(s => console.log(`${this.closing[s]}, ${s}`)
//   )
// }

// printCard.call(configuration)