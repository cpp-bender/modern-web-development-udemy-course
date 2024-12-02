// alert("selam");

// // window obj
// console.log(this);

// const res = confirm("are u sure?");

// if(res){
//     console.log("logged in");
// }
// else{
//     console.log("nothing happened");
// }

let value;
value = window;
value = window.location;
value = window.scroll;

if(confirm("Reload?")){
    window.location.reload();
}
else{
    console.log("not reloading");
}