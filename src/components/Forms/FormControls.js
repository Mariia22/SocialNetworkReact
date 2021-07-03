import React from 'react';
import style from './Form.module.css'

export const required = value => value ? undefined : 'Field is empty';

export const maxLength = maxL => value => value.length < maxL ? undefined : `Must be ${maxL} characters or less`;

const RenderField = ({ input, meta, Formtype, ...props }) => (
    <div>
        <Formtype {...props}{...input} />
        {meta.touched && (meta.error && <span className={style.error}>{meta.error}</span>)}
    </div>
)
export const InputField = (props) => {
    return <RenderField {...props} FormType="input"></RenderField>
}