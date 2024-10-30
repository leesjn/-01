async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      displayWeather(data);
  } catch (error) {
      document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
  }
}

function displayWeather(data) {
  const { location, current } = data;
  document.getElementById('weatherResult').innerHTML = `
      <h2>${location.name}, ${location.country}</h2>
      <img src="https:${current.condition.icon}" alt="Weather icon">
      <p>Temperature: ${current.temp_c}°C</p>
      <p>Condition: ${current.condition.text}</p>
      <p>Humidity: ${current.humidity}%</p>
      <p>Wind: ${current.wind_kph} kph ${current.wind_dir}</p>
  `;
}
