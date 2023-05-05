import "./Campo.css"
import { useState } from "react"

/* 
const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion 
    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
} */

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) => {
        
        props.actualizarValor(e.target.value)
    }

    return <div className="campo">
        <label>{props.titulo} </label>
        <input placeholder= {placeholderModificado}
        required={props.required}
         value={props.valor}
          onChange={manejarCambio}
          />
    </div>
}

export default Campo