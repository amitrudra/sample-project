fetch(`https://restcountries.com/v3.1/all`)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    countries(data);
  });

function countries(country) {
  let root = document.getElementById("root");
  let htmlcode = "";
  country.forEach((e) => {
    htmlcode += converthtml(e);
  });

  root.innerHTML = htmlcode;
}

function converthtml(e) {
  let { name, flags, area, capital } = e;

  let tags = ` 
  <div>
      <img src="${flags.png}">
      </br>
      <h3>${name.common}</h3>
      </br>
      <p>Country Area:${area}</p>
      <p>Capital :${capital}</p>

  </div>`;
  return tags;
}

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchInput = document.getElementById("searchInput").value;
  if (searchInput === "") {
    alert("write your country name");
  }
  let text = searchInput.toLowerCase();
  fetch(`https://restcountries.com/v3.1/name/${text}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      countries(data);
    });
});

