import { useRef } from "react";
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import Form from "./components/Form";

function App() {
	const inputNameRef = useRef<HTMLInputElement>(null);
	const inputSurnameRef = useRef<HTMLInputElement>(null);
	const inputAgeRef = useRef<HTMLInputElement>(null);
	const inputPhoneRef = useRef<HTMLInputElement>(null);
	const inputEmailRef = useRef<HTMLInputElement>(null);

	function showData(data: unknown){
		const currentData = data as {
			name: string;
			surname: string;
			age: number;
			phone: number;
			email:string;
		}

		console.log(currentData);
	}

	return (
		<div className="container">
			<div className="block left_block">
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
			<div className="block right_block">prawy blok</div>
		</div>
	);
}

export default App;
