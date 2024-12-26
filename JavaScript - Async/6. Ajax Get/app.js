class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  // Get Request
  get(url, callback) {
    this.xhr.open("GET", url);

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(this.xhr.responseText, null);
      } else {
        callback(null, "Error occured");
      }
    };
    this.xhr.send();
  }
}

const request = new Request();

const albums = request.get("https://jsonplaceholder.typicode.com/albums",
  (response, err) => {
    if (err === null) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
);
