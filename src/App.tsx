import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Form from "./components/Form";
import SectionTitle from "./components/SectionTitle";
import CustomInput from "./components/CustomInput";
import InfoBoard from "./components/InfoBoard";
import CustomButton from "./components/CustomButton";

type FormDataProps = {
	name: string;
	surname: string;
	age: number;
	phone: number;
	email: string;
};

function App() {
	const inputNameRef = useRef<HTMLInputElement>(null);
	const inputSurnameRef = useRef<HTMLInputElement>(null);
	const inputAgeRef = useRef<HTMLInputElement>(null);
	const inputPhoneRef = useRef<HTMLInputElement>(null);
	const inputEmailRef = useRef<HTMLInputElement>(null);

	const [formData, setFormData] = useState<FormDataProps | null>(null);

	function showData(data: unknown) {
		const currentData = data as FormDataProps;
		setFormData(currentData);
		console.log(currentData);
	}

	return (
		<div className="container">
			<div className="block left_block">
				<SectionTitle>Type your detalis</SectionTitle>
				<Form showFun={showData}>
					<CustomInput
						label="name"
						id="name"
						name="name"
						type="text"
						ref={inputNameRef}
					/>
					<CustomInput
						label="surname"
						id="surname"
						type="text"
						ref={inputSurnameRef}
					/>
					<CustomInput label="age" id="age" type="number" ref={inputAgeRef} />
					<CustomInput
						label="phone"
						id="phone"
						type="number"
						ref={inputPhoneRef}
					/>
					<CustomInput
						label="email"
						id="email"
						type="email"
						ref={inputEmailRef}
					/>
					<CustomButton>Save</CustomButton>
				</Form>
			</div>

			{/* tu będę wyświetlał przechwycone dane z formularza */}
			{formData && (
				<motion.div
					className="block right_block"
					initial={{ x: 0, opacity: 0 }}
					animate={{ x: '100%', opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<InfoBoard data={formData} />
				</motion.div>
			)}
		</div>
	);
}

export default App;
