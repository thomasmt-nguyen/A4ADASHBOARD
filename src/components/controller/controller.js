import React from 'react';
import './controller.scss'

import StartStop from '../startStop/startStop.js'
import EnvironmentBoard from '../environmentBoard/environmentBoard.js'
import ServerPanel from '../serverPanel/serverPanel.js'
import { useGlobal } from 'reactn'
export default function Controller({environments}){
    return (
        <div className="controller">
            <div className="controller-grid-container">
                <div className="controller-grid-item-0">
                    <EnvironmentBoard environments={environments}/>
                </div>
                <div className="controller-grid-item-1">
                    <ServerPanel/>
                </div>
                <div className="controller-grid-item-2">
                    <StartStop/>
                </div>
            </div>
        </div>
    ); 
}