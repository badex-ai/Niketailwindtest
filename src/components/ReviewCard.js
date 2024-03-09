import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className="flex justify-center items-center flex-column">
			<img
				src={imgURL}
				alt="customer"
				className="rounded-full object-cover w-[120px] h-[120px]"
			/>
			<p>{feedback}</p>
			<div>
				<img className="" width="24" height="24" src={star} alt="" />
				<p>{rating}</p>
			</div>
		</div>
	);
};

export default ReviewCard;
