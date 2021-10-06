

String.prototype.exclamation = function() {

                                    return`${this}!`;
                                   
                                    }
console.log("hello".exclamation())
console.log("hello World".exclamation())


function add(...args) {
	return args.reduce((a,b)=>a+b)
                                 }  

console.log(add(2,5));                               
console.log(add(12,8,5,6));                               
