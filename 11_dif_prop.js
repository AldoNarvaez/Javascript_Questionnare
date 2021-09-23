
let obj1 = {"p1":1,"p2":2,"p3":3,"p4":4,"p5":5};

let obj2 = {"p1": "Hola", "p2":2,"p3":3,"p4": "mundo","nombre":5};

function differentProperties(obj1,obj2){
    let properties = [];

    for (let key in obj2){
    	//console.log(key)
        if (key in obj1){

            if (obj1[key] !== obj2[key]){
                properties.push(key);
            }
        }

        else{
            properties.push(key);
        }
    }
    
    return properties;
}

console.log(differentProperties(obj1,obj2));
