import React from 'react';
import './style.css';


export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "black" : "transparent"
  }

  return(
    <div
    style={styles}
    className="box"
    onClick={() => props.toggle(props.id)}
    >
    </div>
  );
}