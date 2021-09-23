var input=[1,2,3,4];

Object.prototype.duplicate=function () {
	let n=this.length;
	for (var i = 0; i < n; i++) {
		this.push(this[i]);
	}

return this
}

console.log(input.duplicate())

