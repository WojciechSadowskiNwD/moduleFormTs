import { useReducer, useRef } from "react";
import CustomInput from "./components/CustomInput";

function App() {
	const inputNameRef = useReducer<HTMLInputElement>(null);
	// const inputSurnameRef = useReducer<HTMLInputElement>(null);
	// const inputAgeRef = useReducer<HTMLInputElement>(null);
	// const inputEmailRef = useReducer<HTMLInputElement>(null);

	return (
		<div className="container">
			<div className="block left_block">
				<CustomInput label="name" id="name" name="name" type="text" ref={inputNameRef} />
				{/* <CustomInput label="surname" id="surname" type="text" />
				<CustomInput label="age" id="age" type="number" />
				<CustomInput label="email" id="email" type="email" /> */}
			</div>

			{/* tu będę wyświetlał przechwycone dane z formularza */}
			<div className="block right_block">prawy blok</div>
		</div>
	);
}

export default App;
