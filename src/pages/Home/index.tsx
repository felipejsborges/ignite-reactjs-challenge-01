import { FaClipboardList as ClipboardIcon } from 'react-icons/fa'
import styles from './styles.module.css'
import logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import { CreateButton } from '../../components/CreateButton'
import { HeaderItem } from '../../components/HeaderItem'
import { Task, ITask } from '../../components/Task'
import { useEffect, useState } from 'react'

export function Home() {
	const [tasks, setTasks] = useState<ITask[]>([])
	const [newTask, setNewTask] = useState('')

	useEffect(() => {
		fetch("/api/tasks")
			.then((response) => response.json())
			.then((json) => setTasks(json.tasks))
	}, [])

	function handleNewTask(description: string) {
		const newTask: ITask = {
			id: String(tasks.length + 1),
			description,
			isCompleted: false
		}
		tasks.push(newTask)
		setTasks([...tasks])
		setNewTask('')
	}

	function handleDeleteTask(taskId: string) {
		const updatedTasks = tasks.filter(task => task.id !== taskId)
		setTasks(updatedTasks)
	}

	function handleToggleStatus(taskId: string) {
		const taskIndex = tasks.findIndex(task => task.id === taskId)
		tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted
		setTasks([...tasks])
	}

	return (
		<div className={styles.home}>
			<header>
				<img src={logo} alt="logo" />
			</header>
			<main>
				<div className={styles.searchContainer}>
					<Input placeholder='Adicione uma nova tarefa' onChange={(e) => setNewTask(e.target.value)} value={newTask} />
					<CreateButton onClick={() => handleNewTask(newTask)} />
				</div>
				<div className={styles.taskList}>
					<header>
						<HeaderItem text='Tarefas criadas' quantity={0} />
						<HeaderItem text='Concluídas' quantity={0} />
					</header>
					<main>
						{!tasks.length ? (
							<div className={styles.emptyList}>
								<ClipboardIcon />
								<strong>Você ainda não tem tarefas cadastradas</strong>
								<span>Crie tarefas e organize seus itens a fazer</span>
							</div>
						) : (
							<div>
								{tasks.map(task => <Task
									key={task.id}
									isCompleted={task.isCompleted}
									description={task.description}
									id={task.id}
									onDeleteTask={handleDeleteTask}
									onToggleStatus={handleToggleStatus}
								/>)}
							</div>
						)}
					</main>
				</div>
			</main>
		</div>
	)
}
