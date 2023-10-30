const apiKey = "a11eca1b472d18f939ccca0dbdb614d1";
const ip = "93.141.15.1";
const apiUrl = `https://api.ipapi.com/api/check?access_key=${apiKey}`;

const fetchLocData = () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const country = data.country_name;
      sessionStorage.setItem("countryName", country);
      document.querySelector(".country-name").textContent = country;
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching geolocation data", error);
    });
};

fetchLocData();
