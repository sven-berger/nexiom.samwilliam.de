import { useEffect, useState } from 'react';
import Box from '../../Box';

const weatherDescriptions = {
    0: { label: 'Klarer Himmel', icon: '☀️' },
    1: { label: 'Überwiegend klar', icon: '🌤️' },
    2: { label: 'Teilweise bewölkt', icon: '⛅' },
    3: { label: 'Bedeckt', icon: '☁️' },
    45: { label: 'Neblig', icon: '🌫️' },
    48: { label: 'Gefrierender Nebel', icon: '🌫️' },
    51: { label: 'Leichter Nieselregen', icon: '🌦️' },
    53: { label: 'Nieselregen', icon: '🌦️' },
    55: { label: 'Starker Nieselregen', icon: '🌧️' },
    61: { label: 'Leichter Regen', icon: '🌧️' },
    63: { label: 'Regen', icon: '🌧️' },
    65: { label: 'Starker Regen', icon: '🌧️' },
    71: { label: 'Leichter Schneefall', icon: '🌨️' },
    73: { label: 'Schneefall', icon: '🌨️' },
    75: { label: 'Starker Schneefall', icon: '❄️' },
    80: { label: 'Regenschauer', icon: '🌦️' },
    81: { label: 'Regenschauer', icon: '🌧️' },
    82: { label: 'Starke Regenschauer', icon: '⛈️' },
    95: { label: 'Gewitter', icon: '⛈️' },
    96: { label: 'Gewitter mit Hagel', icon: '⛈️' },
    99: { label: 'Gewitter mit Hagel', icon: '⛈️' },
};

export default function Weather() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=50.22&longitude=8.11&current=temperature_2m,weather_code&timezone=Europe%2FBerlin',
        )
            .then((res) => res.json())
            .then((data) => setWeather(data.current))
            .catch(() => setError(true));
    }, []);

    const info = weather
        ? (weatherDescriptions[weather.weather_code] ?? { label: 'Unbekannt', icon: '❓' })
        : null;

    return (
        <Box title="Wetter in Idstein" grow>
            {error && (
                <p className="text-sm text-red-500">Wetterdaten konnten nicht geladen werden.</p>
            )}
            {!error && !weather && (
                <p className="text-sm text-slate-400 animate-pulse">Wird geladen…</p>
            )}
            {weather && info && (
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-3xl font-semibold text-slate-700">
                            {Math.round(weather.temperature_2m)}°C
                        </p>
                        <p className="text-sm text-slate-500 mt-1">{info.label}</p>
                    </div>
                    <span className="text-5xl">{info.icon}</span>
                </div>
            )}
        </Box>
    );
}
