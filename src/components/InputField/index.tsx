import style from './InputField.module.scss'
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import classNames from 'classnames'

type InputFieldProps = 
  { element?: 'input', className?: string } & InputHTMLAttributes<HTMLInputElement> |
  { element?: 'textarea', className?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>

export function InputField({ element, className, ...props }: InputFieldProps) {
  const classes = classNames(style.inputField, className)
  
  if(element === 'textarea') {
    return (
      <textarea className={classes} {...props as InputHTMLAttributes<HTMLTextAreaElement>} />
    )
  }

  return (
    <input className={classes} {...props as InputHTMLAttributes<HTMLInputElement>} />
  )
}