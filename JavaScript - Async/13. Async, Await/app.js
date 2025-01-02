async function test(data) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 5000);
  });

  let response = await promise;

  console.log(response);
}

test("Hello");

async function calc(data) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "number") {
        resolve(data);
      } else {
        reject(new Error("Not a number"));
      }
    }, 3000);
  });

  let response = await promise;

  console.log(typeof response);

  return response;
}

calc("a")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

async function fetchData(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

fetchData("https://jsonplaceholder.typicode.com/posts")
.then(data => console.log(data));
