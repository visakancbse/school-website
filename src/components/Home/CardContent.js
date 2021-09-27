import { Button } from '@mui/material'
import React from 'react'
import './css/style.css'

function CardContent({content,...props}) {
    return (
        <div className="card">
            <img className="card-image" src={content?.image} alt={content?.title}/>
            <h2>{content?.title}</h2>
            <Button color="secondary" variant="contained">Learn more</Button>
        </div>
    )
}

export default CardContent
