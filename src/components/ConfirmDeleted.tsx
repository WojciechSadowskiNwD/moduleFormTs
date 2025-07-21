import { motion } from "framer-motion";
import styles from "./ConfirmDeleted.module.scss";

export default function ConfirmDeleted() {
	return (
			<motion.div
				className={styles.confirmDel_box}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h2 className={styles.h2}>
					Data has been{" "}
					<span>
						deleted <i className="fa-regular fa-circle-check"></i>
					</span>
				</h2>
			</motion.div>
	);
}
