function getTextFile(){
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function getJsonFile(){
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));  
} 


getJsonFile();

getTextFile();