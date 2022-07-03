import classNames from "classnames";
import style from './Checkbox.module.scss'
import { InputHTMLAttributes } from "react";
import { Check } from "phosphor-react";

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ type = 'checkbox', className, id, ...props }: ICheckboxProps) {
  return (
    <label className={classNames(style.checkbox, className)}>
      <input type={type} {...props} />
      <span>
        <Check />
      </span>
    </label>
  )
}