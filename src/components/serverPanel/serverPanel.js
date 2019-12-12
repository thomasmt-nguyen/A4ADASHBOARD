import React, {useEffect} from 'react'
import './serverPanel.scss'
import {useGlobal} from 'reactn'

export default function ServerPanel() {
    const [env, setEnv] = useGlobal('currentEnvironment');
    const [serverlive, setServerLive] = useGlobal('serverAlive')

    function getServerStatus() {
        console.log(serverlive)
        if (serverlive.length == 0)
            return "waiting"
        else if (serverlive[env.id] === true)
            return "running"
        else
            return 'stopped'

    }

    return (
        <div className="server-panel">
            <div className="server-title">
                Server: {env.name}
            </div>
            <div className="server-status">
                <span>Status: </span>
                <span className={getServerStatus()}>{getServerStatus().toUpperCase()}</span>
            </div>
        </div>
    )
}