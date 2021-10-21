let patex="aabc"
let pattern="*bc"
let text="aabc";
let pattern1="hola"
let text1="aroholaBjkm";
let pattern2="***a*";

const match = function (pattern, text) {

	let arInd=[];
	let n=pattern.length;
	for(let i=0; i< n; i++){
		if (pattern[i]=="*") {
			arInd.push(i);
		}
	}

	let posWord=[pattern];

	for (let j of arInd){
        for (let w of posWord){
            words = [];
            for (let s=32; s<=126; s++){
                let newWord = `${w.substring(0, j)}${String.fromCharCode(s)}${w.substring(j + 1)}`;
                if (text.includes(newWord.substring(0,j+1)) && !posWord.includes(newWord)){
                    words.push(newWord);
                }
            }
            posWord = posWord.concat(words);
        }
    }
    posWord = posWord.filter(w=> text.includes(w));

    return posWord[0]


}

console.log(match(pattern,text))