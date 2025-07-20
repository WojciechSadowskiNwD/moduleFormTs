import InfoBlock from "./InfoBlock";
import SectionTitle from "./SectionTitle";
import CustomButton from "./CustomButton";

import styles from "./InfoBoard.module.scss";

type InfoBoardProps = {
	data: {
		name: string;
		surname: string;
		age: number;
		phone: number;
		email: string;
	};
};

export default function InfoBoard({ data }: InfoBoardProps) {
	return (
		<div className={styles.InfoBoard_box}>
			<SectionTitle>Your's informations</SectionTitle>

			{Object.entries(data).map(([key, value]) => (
				<InfoBlock key={key} name={key} value={value} />
			))}

			
			<div className={styles.white_section}></div>
			<CustomButton delColors={true}>Clear</CustomButton>
		</div>
	);
}