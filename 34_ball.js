


//initial values
let hi=10;
let vi=0;
let g=385.82;
let ti=0;

var h;
var top=hi;
let i=0;

while(top>0){

	h=hi+vi*ti-g*ti*ti/2;
	if(h<0.01){
		top=top-1;
		vi=Math.sqrt(2*top*g);
		hi=0;
		ti=0;
    	h=hi+vi*ti-g*ti*ti/2;
    	console.log("grounded")

	}
console.log(h)

ti=ti+1*0.01;

}

