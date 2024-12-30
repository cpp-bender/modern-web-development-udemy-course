function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "string") {
        resolve(data);
      } else {
        reject(new Error("Data is not a string"));
      }
    }, 2000);
  });
}

getData(5)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.error(reject);
  });

function send(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        resolve(number + 2);
      } else {
        reject(new Error("Please enter a number"));
      }
    }, 3000);
  });
}


send("a").then((response)=>{
  console.log(response)
  return response + 2;
}).then((response2)=>{
  console.log(response2);
}).catch((error)=>{
  console.error(error);
});