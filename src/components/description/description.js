import React from 'react';
import './description.scss'
export default function Description({agent}){
    return (
        <div className="description">
            <div className="type">Type: {agent.type}</div> 
            <div className="id">Agent ID: {agent.id}</div>
            <div className="completed">Completed: {agent.completed}</div>
            <div className="last">Last Action: {ActionMap[agent.last]}</div>
            <div className="state">State: {StateMap[agent.status]}</div>
        </div>
    );       
}

const ActionMap = {
    0: "TURN_LEFT",
    1: "TURN_RIGHT",
    2: "MOVE_FORWARD",
    3: "PICK_UP",
    4: "DROP",
    5: "IDLE",
    6: "COMPLETE",
    7: "AVOID_OBJECT"
}

const StateMap = {
    0: "Return Home",
    1: "Searching for Home",
    2: "Retrieving Payload",
    3: "Searching for Payload",
    4: "Waiting for Payload",
    5: "Searching for Agent",
    6: "Moving to Agent",
    7: "Avoiding Object"
}