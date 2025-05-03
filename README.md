# Weather App

This is a simple weather application built using Django for the backend and vanilla JavaScript for the frontend. The app allows users to search for weather information by entering a city name. It fetches real-time weather data from the OpenWeatherMap API and displays it in a user-friendly interface.

## Features

- Search for weather information by city name.
- Displays weather details such as:
  - Temperature
  - Weather description
  - Feels like temperature
  - Humidity
  - Wind speed
- Responsive design with a clean and modern UI.
- Error handling for invalid city names or API issues.

## How It Works

1. **Frontend**: The user enters a city name in the search bar on the homepage (`index.html`). The JavaScript file (`script.js`) sends an AJAX request to the backend to fetch weather data.
2. **Backend**: The Django view (`get_weather` in `views.py`) processes the request, fetches data from the OpenWeatherMap API, and returns it as JSON.
3. **Display**: The frontend displays the weather data dynamically or shows an error message if the request fails.

## Prerequisites

- Python 3.x
- Django 3.x or later
- An OpenWeatherMap API key

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Hlawutelo/weather-app.git
   cd weather-app

   Here is the updated content for your README.md file with the provided information:

```markdown
# Weather App

This is a simple weather application built using Django for the backend and vanilla JavaScript for the frontend. The app allows users to search for weather information by entering a city name. It fetches real-time weather data from the OpenWeatherMap API and displays it in a user-friendly interface.

## Features

- Search for weather information by city name.
- Displays weather details such as:
  - Temperature
  - Weather description
  - Feels like temperature
  - Humidity
  - Wind speed
- Responsive design with a clean and modern UI.
- Error handling for invalid city names or API issues.

## Project Structure

```
weather-app/
├── db.sqlite3                # SQLite database file
├── manage.py                 # Django management script
├── static/                   # Static files (CSS, JS, images)
│   ├── css/
│   │   └── style.css         # Stylesheet for the app
│   ├── js/
│   │   └── script.js         # JavaScript for frontend functionality
│   └── images/
│       └── pexels-pixabay-531756.jpg  # Background image
├── templates/
│   └── index.html            # HTML template for the app
├── weatherapp/               # Django app for weather functionality
│   ├── views.py              # Contains the views for the app
│   ├── urls.py               # URL routing for the app
│   ├── models.py             # Placeholder for database models
│   ├── tests.py              # Placeholder for unit tests
│   ├── admin.py              # Placeholder for admin configuration
│   ├── apps.py               # App configuration
│   └── migrations/           # Database migrations
├── weatherproject/           # Django project configuration
│   ├── settings.py           # Project settings
│   ├── urls.py               # Root URL configuration
│   ├── wsgi.py               # WSGI configuration
│   ├── asgi.py               # ASGI configuration
│   └── __init__.py           # Project initialization
└── README.md                 # Project documentation
```

## How It Works

1. **Frontend**: The user enters a city name in the search bar on the homepage (`index.html`). The JavaScript file (`script.js`) sends an AJAX request to the backend to fetch weather data.
2. **Backend**: The Django view (`get_weather` in `views.py`) processes the request, fetches data from the OpenWeatherMap API, and returns it as JSON.
3. **Display**: The frontend displays the weather data dynamically or shows an error message if the request fails.

## Prerequisites

- Python 3.x
- Django 3.x or later
- An OpenWeatherMap API key

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Add your OpenWeatherMap API key in `weatherapp/views.py`:
   ```python
   api_key = 'your-api-key-here'
   ```

4. Run database migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

6. Open the app in your browser at `http://127.0.0.1:8000/`.

## API Integration

The app uses the OpenWeatherMap API to fetch weather data. Ensure you have a valid API key and replace the placeholder in the code.

## Screenshots

![App Screenshot](static/images/pexels-pixabay-531756.jpg)

## License

This project is licensed under the MIT License.
```





