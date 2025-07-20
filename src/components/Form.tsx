import { useState, type ComponentPropsWithoutRef, type FormEvent } from "react";
import WindowError from "./WindowError";

type FormProps = ComponentPropsWithoutRef<"form"> & {
	showFun: (value: unknown) => void;
};

export default function Form({ children, showFun }: FormProps) {
	const [windowError, setWindowError] = useState(false);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData);
		const { name, surname, age, phone, email } = data;
		

		//FORM VALIDATION:
		// use REGEX
		// I know Object.fromEntries includes only data as string but i need to show that I can use typeof...
		const isNameCorr =
			typeof name === "string" &&
			/^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]{3,9}$/.test(name);
		const isSurnameCorr =
			typeof surname === "string" &&
			/^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]{3,9}$/.test(surname);
		const isEmailCorr =
			typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		const isAgeCorr = typeof age === "string" &&  /^[0-9]{1,2}$/.test(age);
		const isPhoneCorr = typeof phone === "string" &&  /^[0-9]{9}$/.test(phone);

		// All fields are filled? true/false
		const allFilled = Object.values(data).every((value) => value !== "");

		if (allFilled && isNameCorr && isSurnameCorr && isEmailCorr && isAgeCorr && isPhoneCorr) {
			setWindowError(false);
			showFun(data);
			event.currentTarget.reset();
		} else {
			console.error("Please complete the missing fields!");
			setWindowError(true);
		}
	}

	// Function to close error window!
	const handleClose = () => {
		setWindowError(false);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>{children}</form>
			{windowError && <WindowError closeWin={handleClose} />}
		</>
	);
}
