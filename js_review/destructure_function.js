function total(num, ...arr){
let sum = 0;
let avg = 0;
sum = arr.reduce((acc,ele) => acc+ele , num)
avg = sum / (arr.length+1)
return{sum,avg};
}

let result = total(1,2,3,4,5);
console.log('sum=', result.sum, 'avg=',result.avg)

let {sum,avg}= total(10,20,30,40,50)
console.log(sum, avg)