let places = new Map();
// let arr = new Array();

places.set(8000000, "New York");
places.set(4000000, "Los Angeles");
places.set(1000000, "Blr-1");
places.set(2000000, "Blr-2");
places.set(3000000, "Blr-3");
places.set(6000000, "Trv-1");
places.set(1010, "no place");

console.log("Map:", places);

if(places.has(80000) == true){
    let place = places.get(80000);
    console.log(place);
}
else{
    console.log("There is no value for this key");
}

// console.log(places.get(1));

let place = places.get(8000000); // if key does not exist, it is undefined

console.log(place);

places.set(2000000, "Banglore-4"); // update a value, upsert(if the key doesnt exisit it will insert a new entry)

let done = places.delete(1010);

if(done == true){
    console.log("The key existed and has been deleted");
}
else{
    console.log("Key doesn't exist");
}

// to fetch all the keys and the value

for(let element of places){
    console.log(element);
}

console.log();
for(let [key, value] of places){
    console.log("Key: " + key + ", Value: " + value);
}

// get only keys

for(let key of places.keys()){
    console.log(key);
}

// get only values

for(let value of places.values()){
    console.log(value);
}


// to use for each loop

places.forEach(function(key,value){
console.log("Key:",key,"Value:",value);
});