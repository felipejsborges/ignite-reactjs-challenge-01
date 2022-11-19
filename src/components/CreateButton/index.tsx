import styles from './styles.module.css'
import { FaPlusCircle as PlusIcon } from 'react-icons/fa'
import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function CreateButton({ ...props }: Props) {
	return (
		<button className={styles.createButton} {...props}>
			Criar
			<PlusIcon />
		</button>
	)
}