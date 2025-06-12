function double_trouble(arr){
    for(let i=0; i<arr.length ; i++){
        if(arr[i] != arr[i+1]){
            arr[i] *= 2;
        }
    }
}

arr = [1,2,3,3,4,5,6,6,6,6]
double_trouble(arr)
console.log(arr)