const searchBtn = document.querySelector('#search-btn');
const countryInp = document.querySelector('#country-inp');
const result = document.querySelector('#result');

// Search Btn
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}`;

  // fetching data from the rest api
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      // Injecting to html
      result.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img">
      <h2> ${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>  
        
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>    

      `;
    });
});
