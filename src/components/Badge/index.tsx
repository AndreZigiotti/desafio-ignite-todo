import classNames from "classnames";
import style from './Badge.module.scss';
import { HTMLAttributes } from "react";

export function Badge({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  const classes = classNames(style.badge, className)

  return (
    <span className={classes} {...props}>{children}</span>
  )
}