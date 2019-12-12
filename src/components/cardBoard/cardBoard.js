
import React, { useState, useEffect } from 'react';
import './cardBoard.scss'
import Card from '../card/card.js'

export default function CardBoard({agentlist}) {
    return (
        <div className="cardBoard">
            <div className="board">
            {agentlist.map((agent, key) => (   
               <Card key={key} agent={agent}/> 
            ))}
            </div>
        </div>
    );
}