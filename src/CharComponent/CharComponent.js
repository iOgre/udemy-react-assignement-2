import React from 'react';
import './CharComponent.css'
const charComponent = (props) => {
  return (<div className="oneLetter" onClick={props.clicked}>{props.singleChar}</div>)
}

export default charComponent;