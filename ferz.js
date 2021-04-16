function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}
let size = 8;
let variants = sFact(size*size)/(sFact(size) * sFact(size*size - size));
console.table([{...{'X': size}, ...{'Y': size}, ...{'Variants': variants}}]);

let nSolutions = 0;
let queens = [];
function Solve(n)
{
   if(n===undefined) n = 0;                  
   if(n >= size){
      nSolutions++;
      return;                          
   }
 
   for(var r=0, c; r < size; r++){               
 
      for(c=0; c < n; c++)                       
         if(   queens[c] === r                   
            || Math.abs(queens[c]-r) === n-c )   
            break;                               
 
      if(c === n){                               
         queens[n] = r;                           
         Solve(n+1);                              
      }
   }
}
(Solve());
console.log(`Number of solutions: ${nSolutions}`);
