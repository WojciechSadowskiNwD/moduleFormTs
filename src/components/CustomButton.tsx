import type { ReactNode } from "react";
import { motion } from "framer-motion";

import styles from "./CustomButton.module.scss";

type ButtonProps = {
	children: ReactNode;
	delColors?: boolean;
};

export default function CustomButton({ children, delColors }: ButtonProps) {
	// const gradientStyle = gradient ? {background: gradient} : undefined; //test1

	return (
		<div className={styles.button_box}>
			<motion.button
				className={`${styles.button} ${delColors ? styles.deleteColors : ""}`}
				// style={gradientStyle}     //test1
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 300 }}
			>
				{children}
			</motion.button>
		</div>
	);
}
