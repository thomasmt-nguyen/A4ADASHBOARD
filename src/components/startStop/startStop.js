import React from 'react'
import StartButton from '../buttons/start/startButton.js'
import StopButton from '../buttons/stop/stopButton.js'

export default function CardBoard (){
    return (
        <div className="cardBoard">
            <StartButton/>
            <StopButton/>
        </div>
    );    
}