let consecutive = ["1234567890","0987654321","qwertyuiop","poiuytrewq","asdfghjkl","lkjhgfdsa","zxcvbnm","mnbvcxz"];
const s=consecutive.length;
                    

function validate(string){
    let n=string.length;
    if (n < 4){
        return "valid string";
    }

    else{
        for(var i = 0; i <= n-4; i++) {
            let sub=string.substring(i,i+4);
            for(var j = 0; j <s ; j++) {
                if(consecutive[j].includes(sub)){
                    return "invalid string"
                }
                else if(j==s-1 && i==n-4){
                   return "valid string"
                }            
            }

        }
    }
    
    
}
console.log(validate("abc1234kem"))
console.log(validate("abc123"))
console.log(validate("hola"))
console.log(validate("asdf"))