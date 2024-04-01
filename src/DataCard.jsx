import React from 'react'

const DataCard = (prop) => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px',
        margin: '5px',
        width: '10rem',
        height: '8rem',
        background: 'white',
        borderRadius: '10px',
        marginTop: '5rem',
        marginRight: '3rem',

    }

  return (
    <div style={containerStyle}>
        <div style={cardStyle} className='weather-card weather-cards'>
            <h5>{prop.name}</h5>
            <p>{prop.info}</p>
        </div>
    </div>
    
  )
}

export default DataCard