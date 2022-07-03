import style from './Task.module.scss'
import { Trash } from 'phosphor-react'
import { Checkbox } from "../Checkbox"
import { ChangeEvent } from "react"
import classNames from "classnames"

interface TaskProps {
  content?: string
  isDone?: boolean
  onToggle?: (value?: boolean) => void
  onDelete?: () => void
}

export function Task({ content, isDone, onToggle, onDelete }: TaskProps) {
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    onToggle?.()
  }

  function handleOnDelete() {
    onDelete?.()
  }

  return (
    <div className={classNames(style.task, { [style.isDone]: isDone })}>
      <Checkbox onChange={handleOnChange} />

      <p className={style.content}>{content}</p>

      <button className={style.deleteButton} onClick={handleOnDelete}>
        <Trash width={20} height={20} />
      </button>
    </div>
  )
}