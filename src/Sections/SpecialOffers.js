import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
	return (
		<section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-contianer  ">
			<div className="flex-1">
				<img
					src={offer}
					width="773"
					height="687"
					alt=""
					className="object-contain w-full "
				/>
			</div>
			<div>
				<h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
					<span className="text-coral-red ">Special </span>
					{/* <span className="text-coral-red">offers </span> */}
					offers
				</h2>
				<p className="mt-4 lg:max-w-lg info-text info-text ">
					Ensuring premium comfort and style, our meticulously crafted footwear
					is designed to elevate your experience, providing you with unmatched
					quality innovation, and a touch of elegance.
				</p>
				<p className="mt-6 lg:max-w-lg info-text">
					Our dedication to detail and excellence ensures your satisfaction{" "}
				</p>
				<div className="mt-11 flex flex-wrap gap-4 ">
					<Button label="Shop now" iconURL={arrowRight} />
					<Button
						label="Learn more"
						background="bg-white"
						borderColor="border-slate-gray"
						textColor="text-slate-gray"
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffers;
