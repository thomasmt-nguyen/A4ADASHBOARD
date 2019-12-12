import React from 'react'
import './stopButton.scss'

import { useGlobal } from 'reactn'

export default function StopButton() {

    const [env, setEnv] = useGlobal('currentEnvironment')

    function stop(){
        const response = fetch(`http://127.0.0.1:5000/agent_simulation/${env.name.toLowerCase()}/stop`, {
            method: 'POST',
        });
    }

    return (
        <button className="stop" onClick={stop}>STOP</button>
    )
}