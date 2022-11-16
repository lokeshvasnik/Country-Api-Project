const searchBtn = document.querySelector('#search-btn');
const countryInp = document.querySelector('.country-inp');
const result = document.querySelector('#result');

// Search Btn
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const searchWrapper = document.querySelector('.box-model');

  let countryName = countryInp.value;

  let finalURL = `https://restcountries.com/v3.1/name/${countryName}`;

  // fetching data from the rest api

  const loader = document.querySelector('.container');

  const showLoader = () => {
    result.innerHTML = 'Loading';
    searchWrapper.classList.add('show');
  };

  const hideLoader = () => {
    loader.classList.remove('show');
    searchWrapper.classList.remove('show');
    countryInp.value = '';
  };

  // Loading function starts
  showLoader();

  // Interal function
  setTimeout(() => {
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        // Injecting to html

        hideLoader();
        result.innerHTML = `
         <img src="${data[0].flags.svg}" class="flag-img">

        <h2> ${data[0].name.common}</h2>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Capital:</h4>
                  <span>${data[0].capital[0]}</span>
              </div>
          </div>  
                  
        `;
      })
      .catch(() => {
        result.innerHTML = `
        <div class="wrapper">
          <div class="data-wrapper">
              <h4>Please Check Input</h4>
          </div>
       </div>  `;
        // return;
      });
  }, 1050);
});
