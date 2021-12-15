
console.time();
let arr = Array(100);
for(let i=0; i<arr.length; i++) {
    arr[i] = new Object();
}
console.timeEnd();  
