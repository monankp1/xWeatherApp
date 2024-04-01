import React,{useState, useEffect} from 'react';
import DataCard from './DataCard';
import axios from 'axios';

const Weather = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [cityName, setCityName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null)

    const fetchData = async(name) => {
        try {
            setIsLoading(true);
            const response = await axios.get("https://api.weatherapi.com/v1/current.json", {
                params : {
                    Key: "dd0838cb30e54d69bb4140843232710",
                    q: name
                }
            }); 
            setData(response.data);
            setIsVisible(true);
            
        } catch (error) {
            alert("Failed to fetch weather data");
            console.error("Error while fetching data",error);
            setIsVisible(false);
        } finally{
            setIsLoading(false);
        }
    };

    const handleSearch = () => {
        setIsVisible(false);
        fetchData(cityName)
    };

    const buttonStyle = {
        backgroundColor:'MediumSeaGreen',
        color:'white',  
        fontSize:'1rem',
        height: '2.5rem',
        width: '5rem', 
        margin:'5px',
        border: '1px',
        borderRadius: '5px',
        marginTop: '8rem'
    }

    const searchBoxStyle = {
        height: '2.5rem',
        width: '15rem',
        border: '1px',
        borderRadius: '10px',


    }

    
  return (
    <div style={{background: "#D3FCF9", height: '100vh'}}>
        <input type='text' onChange={(e) => setCityName(e.target.value)} placeholder='Enter city name' style={searchBoxStyle}/>
        <button onClick={handleSearch} style={buttonStyle}>Search</button>
        <br />

        {isLoading? (<p>Loading data...</p>) : (
            isVisible && data ? (
                <div style={{display:'flex', justifyContent:'center'}}> 
                    <DataCard info={`${data.current.temp_c}°C`} name='Temperature'/>
                    <DataCard info={`${data.current.humidity}%`} name='Humidity'/>
                    <DataCard info={data.current.condition.text} name='Condition'/>
                    <DataCard info={`${data.current.wind_kph}kph`} name='Wind Speed'/>
                </div>
                
            ) : ('')
        )}
        
    </div>
  )
}

export default Weather