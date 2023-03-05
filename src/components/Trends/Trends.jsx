import React from 'react'
import './Trends.css'

function Trends(props) {
    return (
        <div className="Trends">
            <span><b>#{props.trendName} </b></span>
            <span>{props.trendShare}k Shares</span>
        </div>
    )
}

export default Trends