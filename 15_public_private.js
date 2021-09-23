

var foo = (function () { 
    function bar(){
        return "this is public"
    }

    function _privateMethod(){
        return "the access to this method is private"
    }

    function test(){
      return  _privateMethod();
    }
    return{
        bar,
        test
    }
 })();

console.log(foo.bar());
console.log(foo.test());