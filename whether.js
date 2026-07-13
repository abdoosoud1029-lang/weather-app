async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "418715f4e097500eff916694d494e1c8";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
console.log(data);
        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
        let rd = document.getElementById("weather-icon");

if (data.weather[0].description == "clear sky") {
    rd.src = "https://openweathermap.org/img/wn/01d@2x.png";
}
else if (data.weather[0].description == "few clouds") {
    rd.src = "https://openweathermap.org/img/wn/02d@2x.png";
}
else if (data.weather[0].description == "scattered clouds") {
    rd.src = "https://openweathermap.org/img/wn/03d@2x.png";
}
else if (data.weather[0].description == "broken clouds") {
    rd.src = "https://openweathermap.org/img/wn/04d@2x.png";
}
console.log(data.weather[0].description);
    } catch (error) {
        document.getElementById("result").innerHTML = "City not found.";
    } 
} 
