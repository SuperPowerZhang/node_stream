
const fs = require('fs')
const stream = require('stream')
const events = require('events')

const s = fs.createReadStream('./big_file.txt')
const s1=s.constructor.prototype
console.log("s的原型")
console.log(s1)
console.log(s===s1)
console.log(s===s.constructor.prototype)

const s2=s1.constructor.prototype
console.log("s的2级原型")
console.log(s2)
console.log(s1===s2)

// const s3=s2.constructor.prototype
// console.log("s的3级原型")
// console.log(s3)
// console.log("_____s与s3_______")
// console.log(s===s.constructor.prototype)
// console.log(s2===s3)
//
// console.log("____________")
// console.log(stream.Stream.prototype)
// console.log("____________")
// console.log(events.EventEmitter.prototype)