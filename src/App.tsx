import style from './App.module.scss'
import rocket from './assets/rocket.svg'
import clipboard from './assets/Clipboard.svg'
import { PlusCircle } from 'phosphor-react'
import { Button, InputField, Task, Badge } from "./components"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import classNames from "classnames"

interface ITask {
  id: string
  content: string
  isDone?: boolean
}

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<ITask[]>([])

  function handleInputFieldChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTask(event.target.value)
  }

  function addTask(event: FormEvent) {
    event.preventDefault()

    const newTask: ITask = {
      id: Math.random().toString(36).substring(2, 9),
      content: task,
      isDone: false
    }

    setTasks(state => [...state, newTask])
    setTask('')
  }

  function deleteTask(indexOfTaskToDelete: number) {
    const newTasksArray = [...tasks]
    newTasksArray.splice(indexOfTaskToDelete, 1)

    setTasks(newTasksArray)
  }

  function completeTask(indexOfTaskToComplete: number) {
    const newTasksArray = [...tasks]
    newTasksArray[indexOfTaskToComplete].isDone = !newTasksArray[indexOfTaskToComplete].isDone

    setTasks(newTasksArray)
  }

  function handleInvalidInput(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório.')
  }

  return (
    <div className={style.app}>
      <header>
        <div className={style.brand}>
          <img src={rocket} />
          <span className="text-primary-300">to</span>
          <span className="text-secondary-500">do</span>
        </div>
      </header>

      <main>
        <div className="container">
          <form onSubmit={addTask}>
            <div className={style.controls}>
              <InputField
                name="task"
                placeholder="Adicione uma tarefa"
                value={task}
                onChange={handleInputFieldChange}
                onInvalid={handleInvalidInput}
                required
              />
              <Button type="submit" disabled={task.trim() === ''}>
                Criar
                <PlusCircle />
              </Button>
            </div>
          </form>

          <div className={style.info}>
            <div className={style.counter}>
              <span className="text-primary-300">Tarefas criadas</span>
              <Badge>{tasks.length}</Badge>
            </div>

            <div className={style.counter}>
              <span className="text-secondary-300">Concluídas</span>
              <Badge>{tasks.filter(task => task.isDone).length}</Badge>
            </div>
          </div>

          <div className={classNames(style.panel, {[style.withBorder]: tasks.length === 0})}>
            {
              tasks.length === 0 && (
                <div className={style.emptyFeedback}>
                  <img src={clipboard} />
                  <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              )
            }
            {
              tasks.length > 0 && (
                <div className={style.tasksList}>
                  {
                    tasks.map((task, index) => (
                      <Task
                        key={task.id}
                        content={task.content}
                        isDone={task.isDone}
                        onToggle={() => completeTask(index)}
                        onDelete={() => deleteTask(index)}
                      />
                    ))
                  }
                </div>
              )
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
