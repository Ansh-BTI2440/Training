let people = new Map();

let person = {
    "name": "Jitesh",
    "sal": 31231,
    "greet": function(){
        console.log("Hello, I am " + this.name);
    },
    "address": {
        "line-1": "near medical college",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "just":function(){
            console.log("do something");
        }
    },
    "myMap":people,
    "socialMediaq": ["LinkedIn", "x", "fb"]
};

person.greet();
console.log(person.name);
console.log(person.sal);
console.log(person.age);
console.log(person.address);
console.log(person.myMap);

people.set(101, {"name": "John", "Sal": 10000});
people.set(102, {"name": "Jane", "Sal": 20000});
people.set(103, {"name": "Jack", "Sal": 30000});
people.set(104, {"name": "Jiten", "Sal": 20000});
people.set(105, {"name": "David", "Sal": 12000});


for(let person of people){
    console.log("ID:", person[0], "Name:", person[1].name, "Salary:", person[1].Sal);
}

let operations = new Map();

operations.set("add", (a,b) => a+b);
operations.set("sub", (a,b) => a-b);
operations.set("mul", (a,b) => a*b);
operations.set("div", (a,b) => a/b);