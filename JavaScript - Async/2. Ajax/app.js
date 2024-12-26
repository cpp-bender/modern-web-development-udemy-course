document.getElementById("ajax").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "employees.json", true);

  xhr.send();

  xhr.onload = function () {
    let list = document.getElementById("employees");
    list.innerHTML = "";
    if (this.status === 200) {
      const employees = JSON.parse(this.responseText);

      employees.forEach((element) => {
        list.innerHTML += `
            <tr>
                <td>${element.name}</td>
                <td>${element.department}</td>
                <td>${element.salary}</td>
            </tr>`;
      });
    }
  };
});
