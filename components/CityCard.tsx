import {WeatherData}from "../actions/action"
import { Cloud, Droplets, Thermometer } from 'lucide-react';
export default async function CityCard({data}: {data : WeatherData}){ 
    
    const primaryWeather = data.weather[0];
  
  // Convert temperature from Kelvin to Celsius if needed
  const tempCelsius = Math.round(data.main.temp - 273.15);
  const feelsLikeCelsius = Math.round(data.main.feels_like - 273.15)
return (
        <div className="bg-black py-8 flex justify-center">
            <div className="bg-gray-900 border  border-gray-800 rounded-2xl p-8 text-white shadow-2xl max-w-4xl w-full mx-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-white">{data.name}</h2>
                    <div className="flex items-center">
                        <img 
                            src={`https://openweathermap.org/img/wn/${primaryWeather.icon}@2x.png`}
                            alt={primaryWeather.description}
                            className="w-16 h-16 drop-shadow-lg"
                        />
                    </div>
                </div>
                
                <div className="flex items-center mb-6">
                    <Thermometer className="w-8 h-8 mr-3 text-blue-400" />
                    <span className="text-5xl font-bold text-white">{tempCelsius}°C</span>
                    <span className="text-sm text-gray-400 mt-1">Feels like {feelsLikeCelsius}°C</span>
                </div>

                
                
                <div className="flex items-center mb-4">
                    <Cloud className="w-6 h-6 mr-3 text-gray-400" />
                    <span className="text-xl capitalize text-gray-200">{primaryWeather.description}</span>
                </div>
                
                <div className="flex items-center">
                    <Droplets className="w-6 h-6 mr-3 text-blue-400" />
                    <span className="text-lg text-gray-300">Humidity: {data.main.humidity}%</span>
                </div>
            </div>
        </div>
    );
};

