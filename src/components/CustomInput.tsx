import { forwardRef, type ComponentPropsWithoutRef } from "react";
import styles from "./CustomInput.module.scss";

type CustomInputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<"input">;

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
	function CustomInput({ label, id, ...props }, ref) {
		return (
			<p className={styles.paragraph}>
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
				<input
					className={styles.input}
					id={id}
					name={id}
					placeholder={`podaj ${id}`}
					ref={ref}
					{...props}
				/>
			</p>
		);
	}
);

export default CustomInput;
