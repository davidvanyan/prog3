// class Mard {
//     constructor(firstName, lastName, age) {
//         this.first_name = firstName;
//         this.last_name = lastName;
//         this.age = age;
//         greeting("My name is " + firstName + " " + lastName + ", I'm " + age + " years old.");
//     }
//  }


// class Hay extends Mard{
//     super()
//     constructor(firstName, lastName, age, mazeriGuyn, bardzrutyun){
//         this.mazeri_Guyn = mazeriGuyn;
//         this.bardzrutyun = bardzrutyun;
//         greeting("My name is " + firstName + " " + lastName + ", I'm " + age + " years old, I have " + mazeriGuyn + " hair, and I'm " + bardzrutyun + " sm tall.");
//     }
// }

// let Mard1 = new Mard("Movses", "Movsisyan", 28);
// let Hay1 = new Hay("David", "Vanyan", 14, "sev", 155);


var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello world</h1>");
});


app.get("/:name", function(req, res){
    var name = req.params.name;
    res.send("<h1>Hello " + name +"</h1>");
});

app.listen(3001, function(){
    console.log("Example is running on port 3001");
});
