import React from 'react';
import './card.scss'
import Description from '../../components/description/description.js'
import mineral from '../../resource/mineral.jpeg'
import scv from '../../resource/scv.jpeg'

export default function Card({agent}){
    return (
        <div className="card">
            <img className="mineral" src={agent.status === HAS_MINERAL ? mineral : scv}/>
                <Description agent={agent}/>
        </div>
    );       
}

const HAS_MINERAL = 1