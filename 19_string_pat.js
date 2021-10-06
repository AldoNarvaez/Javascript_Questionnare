let pattern="***a*";
let originalText="aloholabjkm";

    function getAllIndexes(str, word) {
        let indexes = [];
        if (word===''){
            return indexes
        }
        let i = -1;
        while ((i = str.indexOf(word, i+1)) != -1){
            indexes.push(i);
        }
        return indexes;
    }


let words = [pattern];
let wildInds = getAllIndexes(pattern, '*');

console.log(wildInds);
    let createdWords;
    for (let i of wildInds){
    	//console.log(i)
        for (let p of words){
        	//console.log(p)
            createdWords = [];
            for (let l=32; l<=126; l++){
                let newWord = `${p.substring(0, i)}${String.fromCharCode(l)}${p.substring(i + 1)}`;
                console.log(newWord)
                if (originalText.includes(newWord.substring(0,i+1)) && !words.includes(newWord)){
                    createdWords.push(newWord);
                }
            }
            words = words.concat(createdWords);
        }
    }
    words = words.filter(word=> originalText.includes(word));


console.log(words)



//subsWord(words);

//function subsWord(words){

  //      for (let word of words){
    //        let newText = originalText;
      //      newText = newText.replaceAll(word, `<span>${word}</span>`);
        //    testText.innerHTML = newText;
       // }
//}
