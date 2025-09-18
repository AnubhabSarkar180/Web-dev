import React, { useState } from "react";


const weatherMap = {
  0: { text: "Clear Sky", icon: "01d" },
  1: { text: "Mainly Clear", icon: "02d" },
  2: { text: "Partly Cloudy", icon: "03d" },
  3: { text: "Overcast", icon: "04d" },
  45: { text: "Fog", icon: "50d" },
  48: { text: "Depositing Rime Fog", icon: "50d" },
  51: { text: "Light Drizzle", icon: "09d" },
  61: { text: "Slight Rain", icon: "10d" },
  71: { text: "Snow Fall", icon: "13d" },
  95: { text: "Thunderstorm", icon: "11d" },
};

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLatLon = async (cityName) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&limit=1`
      );
      const json = await res.json();
      if (json.length > 0) {
        const { lat, lon, display_name } = json[0];
        fetchWeather(lat, lon, cityName);
      } else {
        alert("City not found");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const fetchWeather = async (lat, lon, cityName) => {
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,relative_humidity_2m,wind_speed_10m,apparent_temperature`
      );
      if (!res.ok) throw new Error("Failed to fetch weather");

      const json = await res.json();
      setData({ ...json.current, city: cityName });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const keyDown = (e) => {
    if (e.key === "Enter" && city.trim() !== "") {
      fetchLatLon(city);
    }
  };

  if (loading) return <p>Loading...</p>;

  const weather = data ? weatherMap[data.weathercode] || {} : {};

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #9dd8ff 0%, #e8f5ff 100%)",
        borderRadius: "20px",
        boxShadow: "1px 1px 10px 1px #969696",
        width: "280px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "sans-serif",
        color: "#333",
      }}
    >
      {/* Search Bar */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={keyDown}
          style={{
            padding: "8px 12px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            flex: "1",
          }}
        />
        <span style={{ marginLeft: "10px", fontSize: "20px" }}></span>
      </div>

      
      {data && (
        <>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px" }}>
  {weather.icon ? (
    <img
      src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
      alt={weather.text}
      style={{ width: "80px", height: "80px" }}
    />
  ) : (
    "❔"
  )}
</div>

            <h2 style={{ fontSize: "32px", margin: "10px 0" }}>
              {data.temperature_2m}°C
            </h2>
            <p style={{ fontSize: "16px", margin: "0" }}>
              {weather.text || "Unknown"}
            </p>
            <p style={{ fontWeight: "bold", margin: "5px 0" }}>
              {data.city}
            </p>
          </div>

          {/* Extra Info */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: "12px",
              padding: "10px",
              marginTop: "15px",
              fontSize: "14px",
            }}
          >
            <p>💧 Humidity: {data.relative_humidity_2m}%</p>
            <p>🌬️ Wind: {data.wind_speed_10m} km/h</p>
            <p>🌡️ Feels like: {data.apparent_temperature}°C</p>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
