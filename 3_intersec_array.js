
let arr1=[2,3,5,3];
let arr2=[3,4,3,5,3,6,8];

function intersect_safe(ar1, ar2)
{
  let a=0;
  let b=0;
  var ar = [];

  while( a < ar1.length && b < ar2.length )
  {
     if(ar1[a] < ar2[b] )
     	{ a=a+1; }
     else if (ar1[a] > ar2[b] )
     	{ b=b+1; }
     else
     {
       ar.push(ar1[a]);
       a=a+1;
       b=b+1;
     }
  }

  return ar;
}

console.log(intersect_safe(arr1,arr2))
