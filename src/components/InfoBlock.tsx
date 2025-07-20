import styles from "./InfoBlock.module.scss";

type InfoBlockProps = {
	name: string;
	value: string | number;
}

export default function InfoBlock({name, value}: InfoBlockProps) {
	return (
		<div className={styles.infoBlock}>
			<div className={styles.name_box}>
				<p className={styles.name}>{name}</p>
			</div>
			<div className={styles.extractedData_box}>
				<p className={styles.extractedData}>{value}</p>
			</div>
		</div>
	);
}
