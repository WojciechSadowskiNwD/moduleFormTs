import type { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./CustomButton.module.scss";

type ButtonProps = {
	children: ReactNode;
	delColors?: boolean;
	onClear?: () => void;
};

export default function CustomButton({ children, delColors, onClear }: ButtonProps) {

	return (
		<div className={styles.button_box}>
			<motion.button
				className={`${styles.button} ${delColors ? styles.deleteColors : ""}`}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 300 }}
				onClick={onClear}
			>	
				{children}
			</motion.button>
		</div>
	);
}
