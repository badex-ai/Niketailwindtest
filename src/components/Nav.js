import React from "react";
import headerlogo from "../assets/images/header-logo.svg";
import { navLinks } from "./constants/index";
import { hamburger } from "../assets/icons/index";

const Nav = () => {
	return (
		<header className="padding-x  py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img src={headerlogo} alt="logo" width={130} height={29} />
				</a>
				<ul className="flex flex-justify-center items-center gap-16 max-lg:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-monteserat leading-normal text-lg text-slate-gray m"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className="hidden max-lg:block">
					<img src={hamburger} alt="hamburger" width="25px" height="25px" />
				</div>
			</nav>
		</header>
	);
};

export default Nav;
