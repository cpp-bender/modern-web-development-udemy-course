// operators
/*
==
===
<
>
<=
>=
!=
*/
console.log(2==2); // true
console.log( 2 == "2") // true, does not check type
console.log(2 === "2") // false, checks type
console.log(4>2);    // true
console.log(2>4);    // false
console.log(2!=2);   // false

// not operator
console.log(!(2 == 2));

// and operator
console.log(2 == 2 && "Ahmet" == "Ahmet");

// or operator
console.log(4 == 2 || "ahmet" == "ahmet");


//#region İf-else 
const error = true;
if(error == true){
    console.log("error occured");
}
else{
    console.log("error not occured");
}

const user = "kyu";

if(user === "kyu"){
    console.log("user found");
}
else{
    console.log("user not found");
}

const process ="1";

if(process === "1"){
    console.log("process 1");
}
else if(process === "2"){
    console.log("process 2");
}
else{
    console.log("process error");
}

//#endregion

const number = 100;
console.log(number === 100 ? "its 100" : "its not 100");

//#region switch-case
const res = 2;

switch (res) {
    case 1:
        console.log("res is 2");
        break;
    case 2:
        console.log("process is 2");
        break;
    default:
        console.log("res is wrong");
        break;
}
//#endregion