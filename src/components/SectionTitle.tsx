import type { ReactNode } from "react";
import styles from "./SectionTitle.module.scss";

type SectionTitleProps = {
	children: ReactNode;
}

export default function SectionTitle({children}: SectionTitleProps) {
	return (
		<header className={styles.header}>
			<h2>{children}</h2>
		</header>
	);
}
