import React, {useEffect,useState} from 'react'
// https://nominatim.openstreetmap.org/search?addressdetails=1&q=bakery+in+berlin+wedding&format=jsonv2&limit=1

const App = () => {
  const[loading, setLoading] = useState(false);
  const [data, setData] = useState(null); 
  const [city,setCity] = useState("");
const fetchLatLon = (async(cityName) => {
  try{
  setLoading(true);
  const res = await  fetch(`https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&limit=1`);
  const data = await res.json();
  if(data.length > 0)
  {
    const {lat,lon} = data[0];
    fetchWeather(lat,lon);
  }
  else{
    alert("City not found");  
    setLoading(false);
  }
}
  catch(error)
  {
    console.error(error);
    setLoading(false);
  }

});

const fetchWeather = (async(lat,lon) => {
   const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current=temperature_2m,wind_speed_10m,relative_humidity_2m,is_day,precipitation,rain,showers,snowfall`)
  .then((res) => {
      if(!res.ok)
      {
        throw new Error("Failed to fetch");
      }
      return res.json();
    })
    .then((data) => {
      setData(data);
      setLoading(false);
    })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    setLoading(false);
  })
});

const keyDown = ((e) => {
  if(e.key == 'Enter' && city.trim() != "")
  {
    fetchLatLon(city);
  }
});

  if(loading)
  {
    return <p>Loading data</p>;
  }
else{
  return (
    <div style={
      {
        backgroundColor: "white",
        color: "white",
        height: "350px",
        display: "flex",
        borderRadius: '20px',
        boxShadow: "1px 1px 10px 1px #969696",
        flexDirection: "column",
        gap: "10px",
        fontFamily: "sans-serif",
        justifyContent: "center",
        // background:'#15dceb',
        background: "linear-gradient(180deg,rgba(21, 189, 235, 0.81) 0%, rgba(171, 223, 224, 0.56) 37%, rgba(237, 160, 83, 0) 100%)"
      }
    }>
      <div style = {
        {
          display: "flex",
          justifyContent: "center",
          
        }
      }><input type="text" placeholder='Search city' value={city} onChange={(e) => setCity(e.target.value)} onKeyDown={keyDown} style = {
        {
          background: "white",
          color: "black", 
        }}/>
        </div>
      <div style = {
        {
          backgroundColor: "rgba(204, 204, 204, 0.7)",
          fontSize: "12px",
          fontWeight: "200",
          lineHeight: "1.1",
          color: "black",
          width: "90%",
          textAlign: "center",
          position: "relative",
          top: "44px",
          margin: "60px auto 0",
          borderRadius: "20px",
        }
      }>
        <h2>Feels like:  {data.current.temperature_2m}</h2>
        <h2>Precipitation: {data.current.precipitation}</h2>
        <h2>Humidity : {data.current.relative_humidity_2m}</h2>
      </div>
    </div>
  )
}
}

export default App