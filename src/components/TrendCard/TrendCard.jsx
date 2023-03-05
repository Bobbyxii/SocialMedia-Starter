import React from 'react'
import { TrendData } from '../../Data/TrendData'
import Trends from '../Trends/Trends'
import './TrendCard.css'

function TrendCard() {
    return (
        <div className="TrendCard">
            <h3>Trends For You</h3>
            {TrendData.map((trend, index) => {
                return <Trends key={index} trendName={trend.name} trendShare={trend.shares} id={index} />
            })}
        </div>
    )
}

export default TrendCard