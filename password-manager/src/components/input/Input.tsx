import React from 'react'
import './Input.css'
const Input = (props:any) => {
    return (
        <div>
            <input type="text" placeholder={props.placeholder} className="input username" />
        </div>
    )
}

export default Input