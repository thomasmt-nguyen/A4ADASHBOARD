
import React, {useState, useEffect} from 'react'
import CardBoard from '../cardBoard/cardBoard';
import Controller from '../controller/controller'
import {setGlobal, useGlobal} from 'reactn'
import axios from 'axios'

const environments = [
  {
      name: "Test1",
      id: 0
  },
  {
      name: "Test2",
      id: 1
  },
  {
      name: "HW1",
      id: 2
  }, 
  {
      name: "HW2",
      id: 3
  }, 
]

setGlobal({
  currentEnvironment: environments[0],
  serverAlive: []
});

export default function DashBoard() {

    const [agentlist, setList] = useState([]);
    const [serverlive, setServerLive] = useGlobal('serverAlive')
    const [env, setEnv] = useGlobal('currentEnvironment')

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios (`http://127.0.0.1:5000/info/${env.name.toLowerCase()}`)
            var parsedResults = parseResults(result.data)
            setList(parsedResults)

            const liveResult  = await axios (`http://127.0.0.1:5000/info/health`)
            setServerLive(liveResult.data)
            console.log(serverlive)
        }

        const interval = setInterval(() => {
            fetchData()
        }, 2000);
        return () => clearInterval(interval)
    },[agentlist]);

    return (
        <div className="dashboard">
            <CardBoard agentlist={agentlist}/>
            <Controller environments={environments}/>
        </div>
    )
}

function parseResults (results) {

    let resultList = []

    for (var x in results) {        
        let data = {
            "id" : results[x].agent_id,
            "completed": results[x].payloads_completed,
            "type": results[x].type,
            "last": results[x].last_action,
            "status": results[x].status
        }

        if (results[x].agent_id != null)
            resultList.push(data)
    }
    return resultList
}