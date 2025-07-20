import styles from "./WindowError.module.scss";

type WindowErrorProps = {
	closeWin: (value: boolean) => void;
};

export default function WindowError({ closeWin }: WindowErrorProps) {
	return (
		<div className={styles.error_window}>
			<h2 className={styles.h2}>Please complete the missing fields!</h2>
			
			<ul>
				<li>First name, Last name must only contain characters 3 to 9</li>
				<li>Age can only have numbers (string of max 2 digits)</li>
				<li>The number must consist of 9 numbers</li>
			</ul>

			<button className={styles.btn_close_window} onClick={() => closeWin(false)}>
				<i className="fa-solid fa-x"></i>
			</button>
		</div>
	);
}
