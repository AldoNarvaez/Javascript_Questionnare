let input=[2,0,4,5,0,2,0,0,3];

const zeroArray= function (input) {
	let n=input.length;

	input=input.filter(x => x!=0);

	while(input.length<n){
		input.push(0);
	}

	//let s=input.length;

	//for (var i = s; i < n; i++) {
	//	input.push(0);
	//}
	return input;

}

console.log(zeroArray(input));
