import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	checked?: boolean;
}

export function Checkbox({ checked, ...props }: Props) {
	return (
		<button className={checked ? styles.checked : styles.unchecked} {...props} />
	)
}