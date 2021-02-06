fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    // console.log(countries);      //for checking /
    const countriesDiv = document.getElementById('countries');          // 3rd Method /
    countries.forEach(country => {
        const countryDiv = document.createElement("div");

        countryDiv.className = "country"

        const countryInfo = `
        <h3 class = "country-name">${country.name}</h3>
        <p>${country.capital}</p>
        `;

        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });






    // for (let i = 0; i < countries.length; i++) {             // 2nd Method /
    //     const country = countries[i];
    //     const countryDiv = document.createElement("div");

    //     countryDiv.className= "country"

    //     const countryInfo = `
    //     <h3 class = "country-name">${country.name}</h3>
    //     <p>${country.capital}</p>

    //     `;
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);



    // const countryName = document.createElement("h3");        // 1st method /
    // countryName.innerText = country.name;
    // countryDiv.appendChild(countryName);        //2nd way/   

    // const countryCapital = document.createElement("p");
    // countryCapital.innerText = country.capital;
    // countryDiv.appendChild(countryCapital);     //2nd way/

    // // countryDiv.appendChild(countryName);        //1st way/
    // // countryDiv.appendChild(countryCapital);     //1st way/


    // countriesDiv.appendChild(countryDiv);

    // // countryDiv.innerText = country.name;         //test Case for checking/
    // // countriesDiv.appendChild(li);
    // // console.log(country.name);
}
// }