import styles from './styles.module.css'

interface Props {
	text: string;
	quantity: number;
}

export function HeaderItem({ quantity, text }: Props) {
	return (
		<div className={styles.headerItem}>
			<span>
				{text}
			</span>
			<div className={styles.quantity}>
				<span>
					{quantity}
				</span>
			</div>
		</div>
	)
}