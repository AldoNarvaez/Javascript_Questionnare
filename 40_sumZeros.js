function sumZero(ar){
    let arzeros = [];
    let n=ar.length;
    for (let i = 0; i < n-2; i++){
        for (let j= i+1; j < n-1; j++){
            for (let s = j+1; s< n; s++){

                if(ar[i] + ar[j] + ar[s] == 0){
                    let zero=[ar[i], ar[j], ar[s]];
                    let m=arzeros.length
                    if(m==0){arzeros.push(zero)}
                    else{  
                    for(let l=0; l<m; l++){
                        var a=zero;
                        var b=arzeros[l];
                        if(b.sort().join(",")==a.sort().join(",")){
                            break
                        } else if( l==m-1){
                            arzeros.push(zero);
                        }
                    }
                }
                    
                }
            }
        }
    }
    return arzeros;
}

let ar=[3,2,1,0,-3,2,2,-2];

console.log(sumZero(ar))
