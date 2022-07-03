import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import style from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary'
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const classes = classNames(style.btn, style[variant], className)

  return <button className={classes} {...props}>{children}</button>
}