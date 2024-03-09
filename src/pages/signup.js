import React from "react";
import { Formik, Form, useField } from "formik";
import { userSchema } from "../utils/utils";
import FormInput from "../components/formInput";

const Signup = () => {
	return (
		<div className="w-[500px] bg-blue rounded-sm border border-black h-auto mx-auto">
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					// acceptedTerms: false, // added for our checkbox
					jobType: "", // added for our select
				}}
				validationSchema={userSchema}
			>
				<Form className="flex flex-col">
					<FormInput
						label="First Name"
						name="firstName"
						type="text"
						placeholder="Firstname"
					/>
					<FormInput
						label="Last Name"
						name="lastName"
						type="text"
						placeholder="Lastname"
					/>
					<FormInput
						label="email"
						name="email"
						type="email"
						placeholder="@email"
					/>
				</Form>
			</Formik>
		</div>
	);
};

export default Signup;
