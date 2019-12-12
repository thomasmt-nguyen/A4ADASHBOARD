import React from 'react'
import './startButton.scss'

import { useGlobal } from 'reactn'

export default function StartButton(){

    const [env, setEnv] = useGlobal('currentEnvironment')

    function start(){
        const response = fetch(`http://127.0.0.1:5000/agent_simulation/${env.name.toLowerCase()}/start`, {
            method: 'POST',
        });
    }

    return (
        <div>
            <button className="start" onClick={start}>START</button>
        </div>
    )
}
