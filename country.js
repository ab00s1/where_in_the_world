const countryName = new URLSearchParams(window.location.search).get(
  "countryName"
);
const countryHeader = document.querySelector(".country-details div h1");
const cardText = document.querySelector(
  "body > main > div > div > div.card-text"
);
const borderCountries = document.querySelector(".border-countries p");
let info;
const backButton = document.querySelector(".back-button");

backButton.addEventListener("click", () => history.back());

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([data]) => {
    info = data;
    document.querySelector("body > main > div > img").src = data.flags.svg;
    countryHeader.innerText = `${data.name.common}`;
    cardText.innerHTML = `<p><b>Native Name: </b>${
      Object.values(info?.currencies || {}).length
        ? Object.values(data.name?.nativeName || {}).map((elm) => elm.common)
        : "unknown"
    }</p>
            <p><b>Population: </b>${data.population}</p>
            <p><b>Region: </b>${data.region}</p>
            <p><b>Sub Region: </b>${data?.subregion || "unknown"}</p>
            <p><b>Capital: </b>${data.capital || "unknown"}</p>
            <p><b>Top Level Domain: </b>${data.tld}</p>
            <p><b>Currencies: </b>${
              Object.values(info?.currencies || {}).length
                ? Object.values(info?.currencies || {}).map((curr) => curr.name)
                : "unknown"
            }</p>
            <p><b>Languages: </b>${
              Object.values(info?.languages || {}).length
                ? Object.values(info?.languages || {})
                : "unknown"
            }</p>`;

    if (data.borders) {
      data.borders.forEach((code) => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
          .then((res) => res.json())
          .then(([cntr]) => {
            const anchor = document.createElement("a");
            anchor.href = `details.html?countryName=${cntr.name.common}`;
            anchor.innerHTML = `${cntr.name.common} &nbsp;&nbsp;`;
            borderCountries.append(anchor);
          });
      });
    } else {
      const span = document.createElement("span");
      span.innerText = "Unknown";
      borderCountries.append(span);
    }
  });

const body = document.querySelector("body");
const darkMode = document.querySelector("body > header > p");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  darkMode.innerHTML = `<i class="fa-solid fa-sun"></i> Light Mode`;
}
if (localStorage.getItem("theme") === "light") {
  body.classList.remove("dark");
  darkMode.innerHTML = `<i class="fa-regular fa-moon"></i> Dark Mode`;
}

darkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList[0]) {
    darkMode.innerHTML = `<i class="fa-solid fa-sun"></i> Light Mode`;
    localStorage.setItem("theme", "dark");
  } else {
    darkMode.innerHTML = `<i class="fa-regular fa-moon"></i> Dark Mode`;
    localStorage.setItem("theme", "light");
  }
});
