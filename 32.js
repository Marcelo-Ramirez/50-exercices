/*
 * Dado un listado de números, encuentra el SEGUNDO más grande.
 */
 
 function numbSecond(arr){
   let n1 =0
   let n2 =0
   for(let i =0,f=1; i<arr.length; i+=2;f+=2){
     if(arr[i]>n1){
       n1 = arr[i]
     }
     if(arr[f]>n2){
       n2 = arr[f]
     }
   }
   if(n1<n2){
     return n1
   }else{
     return n2
   }
 }
 
 console.log(numbSecond([1,2,3,4,5,6,7,8])