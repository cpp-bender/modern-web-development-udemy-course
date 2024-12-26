// Http Status
// 200: OK
// 403: Forbidden
// 404: Not Found
// 505: Internal Server Error

// Ready State Values
// 0: Request not initialized
// 1: Server connection established
// 2: Request received
// 3: Processing request
// 4: Request finished and response is ready

document.getElementById("btn").addEventListener("click", function () {
  // XMLHttpRequest Object
  const xhr = new XMLHttpRequest();

  xhr.onprogress = function () {
    console.log("On Progress", this.readyState);
  };

  xhr.onload = function () {
    if (this.status === 200) {
        document.getElementById("ajax").textContent = this.responseText;
    }
  };

  // xhr.onreadystatechange = function() {
  //     if(this.status === 200 && this.readyState === 4) {
  //         console.log(this.responseText);
  //     }
  // }

  xhr.open("GET", "example.txt", true);

  xhr.send();
});
