
var str="Hola a ywyy todos"

const reverseWords= function (string) {

let n=str.length;
let emp="";
let emp2="";
for (var i = 0; i < n; i++) {

		emp=emp+string[i];

	if(string[i]==" "){
	    reverse(emp);
		emp2=emp2+reverse(emp);
		emp="";

	}
	else if (string[i+1]==undefined) {
		emp2=emp2+" "+reverse(emp)
	}
	
	

}
return emp2
}


String.prototype.reverse = function () {

let n=this.length;
let emp="";
for (var i = 0; i < n; i++) {
emp=emp+this[n-i-1];
}
return emp
}

String.prototype.reverseWords= function () {

let n=this.length;
let emp="";
let emp2="";
for (var i = 0; i < n; i++) {

		emp=emp+this[i];

	if(this[i]==" "){
	  
		emp2=emp2+emp.reverse();
		emp="";

	}
	else if (this[i+1]==undefined) {
		emp2=emp2+" "+emp.reverse()	}
	
	

}
return emp2
}

console.log("eque pasa".reverse());
console.log("eque pasa".reverseWords());