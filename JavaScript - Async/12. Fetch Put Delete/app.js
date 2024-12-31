class Request{
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE"
            })
            .then(response => resolve("Data deleted successfully"))
            .catch(err => reject(err));
        });
    }
}

const request = new Request();

request.put("https://jsonplaceholder.typicode.com/albums/1", {userId: 10, title: "Thriller"})
.then(data => console.log(data))
.catch(err => console.error(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(mess => console.log(mess))
.catch(err => console.error(err));