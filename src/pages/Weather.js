import React, { useState } from 'react'
import { fetchWeather } from './fetchWeather'
import './style/Weather.css'
import SpeechRecognition ,{useSpeechRecognition} from "react-speech-recognition";

const Weather = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const commands = [
        {
          command: ["*"],
        },
    ];

    const { transcript } = useSpeechRecognition({ commands });

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    const search = async(e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(transcript ? transcript : query)
            setWeather(data)
            setQuery('')
        }
    }
    const get = async() => {
        if(true) {
            const data = await fetchWeather(transcript ? transcript : query)
            setWeather(data)
            setQuery('')
        }
    }
    
    return ( 
        <div className='mainn_container'>
            <div className="boxx">
                <input 
                    type="text"
                    placeholder="Search..."
                    className="searchh"
                    value={transcript ? transcript : query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={search}
                />

                <button onClick={SpeechRecognition.startListening} className="micc"><i className= "fa fa-microphone"></i></button>
            </div>
            <button onClick={get} className="searchh_2">search</button>

            {weather.main && (
                <div className="cityy">
                    <h2 className="cityy_name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="cityy_temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="infoo">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className="city-icon"/>
                        <p className="pp">{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
            {/*console.log(weather)*/}
            
        </div>
     );
}
 
export default Weather;