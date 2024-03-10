import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className="flex flex-col justify-center items-center ">
			<img
				src={imgURL}
				alt="customer"
				className="rounded-full object-cover w-[120px] h-[120px]"
			/>

			<p className="mt-6 max-w-sm text-center info-text">{feedback}</p>

			<div className="mt-3 flex justify-center items-center gap-2.5">
				<img className="" width="24" height="24" src={star} alt="rating star" />
				<p>{rating}</p>
			</div>
			<h3 className="font-palaquin mt-1 text-3xl text-center font-bold">
				{customerName}
			</h3>
		</div>
	);
};

export default ReviewCard;
