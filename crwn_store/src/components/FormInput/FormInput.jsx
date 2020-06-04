import React from 'react'
import "./form-input.styles.scss"

export default function FormInput({handleChange , value , label , ...otherProps}) {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {label && <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
        </div>
    )
}
