import React from 'react'

import EnvironmentButton from '../buttons/environment/environmentButton'
import './environmentBoard.scss'

export default function EnvironmentBoard({environments}) {

    return (
        <div className="grid-container">
            {
                environments.map((environment, key) => (
                    <EnvironmentButton key={key} environment={environment}/>
                ))
            }
        </div> 
    )
}