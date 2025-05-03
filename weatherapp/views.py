import json
import requests
from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')

def get_weather(request):
    if request.method == 'GET':
        city = request.GET.get('city', '')
        if not city:
            return JsonResponse({'error': 'Please provide a city name'}, status=400)
        
        # Your OpenWeatherMap API key
        api_key = 'b0063ca7ff936c24c6ad0719076d03f3'
        url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
        
        try:
            response = requests.get(url)
            data = response.json()
            
            if response.status_code == 200:
                weather_data = {
                    'city': data['name'],
                    'country': data['sys']['country'],
                    'temperature': data['main']['temp'],
                    'description': data['weather'][0]['description'],
                    'icon': data['weather'][0]['icon'],
                    'humidity': data['main']['humidity'],
                    'wind_speed': data['wind']['speed'],
                    'feels_like': data['main']['feels_like'],
                }
                return JsonResponse(weather_data)
            else:
                return JsonResponse({'error': data.get('message', 'Failed to get weather data')}, status=response.status_code)
                
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)
