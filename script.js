const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".filter-by-region");
let allCountriesData;
const searchBar = document.querySelector(
  "body > main > div.search-filter-container > div.search-button > input[type=search]"
);

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((response) => {
    allCountriesData = response;
    response.forEach((country) => {
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href = `details.html?countryName=${country.name.common}`;
      countryCard.innerHTML = `<img src="${country.flags.svg}" alt="flag" />
          <div class="card-text">
            <h3>${country.name.common}</h3>
            <p><b>Population: </b>${country.population.toLocaleString(
              "en-IN"
            )}</p>
            <p><b>Region: </b>${country.region}</p>
            <p><b>Capital: </b>${country.capital}</p>
          </div>`;
      countriesContainer.append(countryCard);
    });
  });

filterByRegion.addEventListener("change", (e) => {
  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => res.json())
    .then((response) => {
      allCountriesData = response;
      countriesContainer.innerHTML = ``;
      response.forEach((country) => {
        const countryCard = document.createElement("a");
        countryCard.classList.add("country-card");
        countryCard.href = `details.html?countryName=${country.name.common}`;
        countryCard.innerHTML = `<img src="${country.flags.svg}" alt="flag" />
    <div class="card-text">
      <h3>${country.name.common}</h3>
      <p><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
      <p><b>Region: </b>${country.region}</p>
      <p><b>Capital: </b>${country.capital}</p>
    </div>`;
        countriesContainer.append(countryCard);
      });
    });
});

searchBar.addEventListener("input", (e) => {
  console.log(e.target.value);
  const searchResult = allCountriesData.filter((elm) =>
    elm.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );
  countriesContainer.innerHTML = ``;
  searchResult.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `details.html?countryName=${country.name.common}`;
    countryCard.innerHTML = `<img src="${country.flags.svg}" alt="flag" />
    <div class="card-text">
      <h3>${country.name.common}</h3>
      <p><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
      <p><b>Region: </b>${country.region}</p>
      <p><b>Capital: </b>${country.capital}</p>
    </div>`;
    countriesContainer.append(countryCard);
  });
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
