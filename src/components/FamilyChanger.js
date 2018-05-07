import React from 'react';

export default function FamilyChanger(props) {
  return (
    <select className="dropDownContainer" 
        onChange = {event => props.update(event.target.value)}
        value = {props.fontFamily}
      >
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}