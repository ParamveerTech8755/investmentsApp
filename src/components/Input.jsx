import {useState} from "react"

export default function Input({label, id, type, state, updateInput}){

	function handleChange(event){
		// setValue(event.target.value)
		updateInput(id, event.target.value)
	}
	return (
		<div>
          <label htmlFor={id}>{label}</label>
          <input id={id} type={type} value={state[id]} onChange={handleChange}/>
        </div>
	)
}
