document.getElementById("change").addEventListener("click", change);

function change() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://api.exchangeratesapi.io/v1/latest?access_key=a917452fcf3589a6fcdb1acdfaa0c917&format=1",
    true
  );

  xhr.send();

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      const rate = response.rates.TRY;
      const amount = Number(document.getElementById("amount").value);
      document.getElementById("tl").value = amount * rate; 



    }
  };
}
