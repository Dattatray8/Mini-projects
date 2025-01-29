function getData(){
    const search = document.getElementById('search');
    const apiKey = 'b39ccf396202dad3f80a1e986e8b80c5';
    const city = search.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    async function getWeather() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            const tempInKelvin = result.main.temp;
            const tempInCelsius = tempInKelvin - 273.15;
            temperature.innerHTML = tempInCelsius.toFixed(1);
            t = document.getElementById('temperature');
            t.style.color = 'white';
            humidity.innerHTML = result.main.humidity;
            ws.innerHTML = result.wind.speed;
            console.log(result)
        } catch (error) {
            console.error(error);   
        }   
    }

    getWeather();
}