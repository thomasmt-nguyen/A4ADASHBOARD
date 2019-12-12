import React from 'react'
import {setGlobal, useGlobal} from 'reactn'
import './environmentButton.scss'

export default function EnvironmentButton({environment}) {

    const [env, setEnv] = useGlobal('currentEnvironment');

    function update(){
        setEnv(environment)
    }

    return ( 
        <button className={`grid-item-${environment.id} ${environment.name.toLowerCase()} button`} onClick={update}>
            {environment.name.toUpperCase()}
        </button>
    )
}