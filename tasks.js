const fs = require('fs');
const command = process.argv[2];
const string = process.argv[3];
var list = fs.readFileSync("clients.txt").toString().split("}");
var tasks = list.length-1;
console.log(list);
if(list[0] == ''){
  list[0] = 0;
}

switch(command){
  case "list":
    console.log("\nID Description \n-- -----------\n");
    for(var i = 1; i < list.length; i++){
      console.log(i + " " + list[i]);
    }
    console.log("You have " + tasks + " tasks.");
    break;
  case "add":
    list[0]++;
    list.push(string);
    fs.writeFile("list.txt", list);
    tasks = list.length-1;
    console.log("Created task " + tasks);
    break;
  case "complete":
    for(var i = 0; i < list.length; i++){
      if(i.toString() === string){
        console.log("Completed task " + i + ": \'" + list[i] + "\'");
        list.splice(i,1);
        fs.writeFile("list.txt", list);
        break;
      }
    }
    break;
  case "delete":
    for(var i = 0; i < list.length; i++){
      if(i.toString() === string){
        console.log("Deleted task " + i + ": \'" + list[i] + "\'");
        list.splice(i,1);
        fs.writeFile("list.txt", list);
        break;
      }
    }
    break;
  case "reset":
    fs.writeFile("list.txt", "");
    break;
}
