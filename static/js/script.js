document.addEventListener('DOMContentLoaded', function() {
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');
    const weatherContainer = document.getElementById('weather-container');
    const errorContainer = document.getElementById('error-container');

    // Function to fetch weather data
    async function getWeatherData(city) {
        try {
            const response = await fetch(`/weather/?city=${encodeURIComponent(city)}`);
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch weather data');
            }
            
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Function to display weather data
    function displayWeatherData(data) {
        weatherContainer.style.display = 'block';
        errorContainer.style.display = 'none';
        
        weatherContainer.innerHTML = `
            <div class="weather-header">
                <div class="location">${data.city}, ${data.country}</div>
            </div>
            <div class="weather-content">
                <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png" alt="${data.description}" class="weather-icon">
                <div class="temperature">${Math.round(data.temperature)}°C</div>
                <div class="description">${data.description}</div>
                <div class="weather-details">
                    <div class="detail">
                        <span class="detail-label">Feels Like</span>
                        <span class="detail-value">${Math.round(data.feels_like)}°C</span>
                    </div>
                    <div class="detail">
                        <span class="detail-label">Humidity</span>
                        <span class="detail-value">${data.humidity}%</span>
                    </div>
                    <div class="detail">
                        <span class="detail-label">Wind Speed</span>
                        <span class="detail-value">${data.wind_speed} m/s</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Function to display error message
    function displayError(message) {
        weatherContainer.style.display = 'none';
        errorContainer.style.display = 'block';
        errorContainer.textContent = message;
    }

    // Event listener for search button
    searchBtn.addEventListener('click', async function() {
        const city = cityInput.value.trim();
        
        if (!city) {
            displayError('Please enter a city name');
            return;
        }
        
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            displayError(error.message);
        }
    });

    // Event listener for Enter key press
    cityInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchBtn.click();
        }
    });
});