import React from 'react'
import css from './FormControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={css.formControl + " " + (hasError ? css.error : '')}>
            <textarea {...input} {...props} />
            { hasError && <span>{' ' + meta.error}</span> }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={css.formControl + " " + (hasError ? css.error : '')}>
            <input {...input} {...props} />
            { hasError && <span>{' ' + meta.error}</span> }
        </div>
    )
}