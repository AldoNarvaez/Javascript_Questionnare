let input=[2,0,4,5,0,2,0,0,3];
let f=[1,2,3,4];
console.log(f);

const zeroArray= function (input) {
	let n=input.length;
	
	let m=0;

	for(let i=0; i<n;i++){
		if (input[i] !=0) {
			input[m++]=input[i];
		}
	}

	for(let j=m; j<n; j++){
		input[j]=0;
	}

	return input

}

console.log(zeroArray(input));
