

const match=function (pattern,text) {

	let matches=pattern;
	if (matches.includes("*")){
		let newMatches="";
		let n=matches.length;
		let i=0;
		while(i<n){
			let word="";
			if(matches[i]=="*"){

				if(i==0){
					for (var l = 0; l < n; l++) {
						
						if(matches[l]!="*" || l==n-1){
							var m=l;
						break
						}

					}
					
					let firstMatchIn=text.indexOf(matches[l],m);
					if(firstMatchIn>0){
						matches=text[firstMatchIn-m]+matches.substring(1,n);
						let j=i+1;
						while(matches[j]!="*"){
							j=j+1
						}
						newMatches=newMatches+matches.substring(0,j);
						i=j;


					}
            	
            	}

				

				for (var j = 32; j <=126; j++) {
					word=newMatches+String.fromCharCode(j);
					if (text.includes(word)){
                    newMatches=word;

                   break
                	}
                	else if(j==126)
                		{return("no matches")}
				}
				
			
		
	}



			else if (i==0) {
				if(text.includes(matches[i])){
					newMatches=newMatches+matches[i];

				}
				else{
					return "no matches"
				}
			}
			else if (text.includes(newMatches) && word=="") {
				newMatches=newMatches+matches[i];
			}
			else{
				return "no matches"
			}
			i=i+1;


		}

		return newMatches

	}

	else if(text.includes(matches)){
		return matches
	}

	else{
		return "no matches"
	}

}


let pattern1="hola"
let pattern2="**B*k*";
let pattern3="zzzz"
let text="aroholaBjkm";

console.log(match(pattern2,text))
