import type { ComponentPropsWithoutRef, FormEvent } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
	showFun: (value: unknown) => void;
};

export default function Form({ children, showFun }: FormProps) {
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData);

		showFun(data);
		event.currentTarget.reset();
	}

	return <form onSubmit={handleSubmit}>{children}</form>;
}
