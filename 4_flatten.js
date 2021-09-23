let input=[1,2,3,[4,5,[6,7]],8,9];

const flat=function (arr) {

	var ar = [];
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            ar = ar.concat(flat(arr[i]));
        } else {
            ar.push(arr[i]);
        }
    }
    return ar;

	
}


console.log(flat(input))