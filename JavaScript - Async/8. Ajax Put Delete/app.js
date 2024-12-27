class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
  put(url, data, callback) {
    this.xhr.open("PUT", url);

    this.xhr.setRequestHeader("Content-type", "application/json");

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Put Request: Error occured", null);
      }
    };

    this.xhr.send(JSON.stringify(data));
  }

  delete(url, callback) {
    this.xhr.open("DELETE", url);

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, "Delete Request: Deleted");
      } else {
        callback("Delete Request: Error occured", null);
      }
    };

    this.xhr.send();
  }
}

const request = new Request();

request.put(
  "https://jsonplaceholder.typicode.com/albums/1",
  { userId: 143, title: "Hello" },
  (err, response) => {
    if (err === null) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
);

request.delete(
  "https://jsonplaceholder.typicode.com/albums/10",
  (err, response) => {
    if (err === null) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
);
