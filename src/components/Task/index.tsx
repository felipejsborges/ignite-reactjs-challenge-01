import { FaTrashAlt as TrashIcon } from 'react-icons/fa';
import styles from './styles.module.css'
import { Checkbox } from '../Checkbox';

export interface ITask {
	id: string;
	description: string;
	isCompleted?: boolean;
}

interface Props extends ITask {
	onDeleteTask: (taskId: string) => void;
	onToggleStatus: (taskId: string) => void;
}

export function Task({ isCompleted, description, id, onDeleteTask, onToggleStatus }: Props) {
	return (
		<div className={styles.task}>
			<main>
				<Checkbox checked={isCompleted} onClick={() => {
					onToggleStatus(id)
				}} />

				<span>{description}</span>
			</main>

			<aside onClick={() => onDeleteTask(id)}>
				<TrashIcon />
			</aside>
		</div>
	)
}