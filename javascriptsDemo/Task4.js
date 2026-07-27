let arr1 = [10,4,10,3,5,6,7,3,4,7,8,9,10,4,5,2,1,10,5,6,7,3,5];

let map = new Map();

for(let i=0; i<arr1.length; i++){
    if(map.has(arr1[i])){
        map.set(arr1[i], map.get(arr1[i]) + 1);
    }
    else{
        map.set(arr1[i],1);
    }
}

for(let [key, value] of map){
    console.log("Key: " + key + ", Value: " + value);
}