
function myPowerFn(x) {
	
	function power(n) {
		let c=1;
		for (var i = 1; i <= n; i++) {
			c=c*x;
		}
		return c

	}

return power

}

let n=myPowerFn(3);
console.log(n(3));