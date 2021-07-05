import React from 'react';
import style from './Form.module.css'

export const required = value => value ? undefined : 'Field is empty';
export const maxLength = maxL => value => value.length < maxL ? undefined : `Must be ${maxL} characters or less`;


const RenderField = ({ input, meta, FieldType, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? style.error : undefined}>
            <FieldType  {...input} {...props} />
            {hasError && <span className={style.error}>{meta.error}</span>}
        </div>
    )
}
export const InputField = (props) => {
    return <RenderField {...props} FieldType="input" />
}
export const TextareaField = (props) => {
    return <RenderField {...props} FieldType="textarea" />
}