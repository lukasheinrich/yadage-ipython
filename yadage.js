console.log('hello')
exports = require('exports')
function hello(who){
   console.log('world' + who)
   return 1
}
exports.hello = hello
