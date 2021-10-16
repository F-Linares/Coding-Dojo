var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

//print log john's age 
console.log(users[1].age)
//OR IF JOHN'S INDEX IS UNKNOWN 
for (var i=0;i<users.length;i++){
  if (users[i].name == "John"){
    console.log(users[i].age);
  }
}

//PRINTING NAME OF FIRST OBJECT
console.log(users[0].name);

//LOOP, PRINTING NAMES AND AGE
for (var i = 0; i<users.length;i++){
  console.log(users[i].name + " - " + users[i].age);
}