import React from 'react';
import './../../../css/bottombar/subscomponents/trigger.css';

interface ITriggerProps {
  channel: string, 
  mode: string
}

function Trigger(props: ITriggerProps) {
  return (
    <div className="TriggerStatus"> 
      Trig:{props.channel}, Mode:{props.mode}
    </div>
  )
}

export default Trigger;