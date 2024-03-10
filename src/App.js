// import logo from "./logo.svg";
// import "./App.css";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import {
	Hero,
	Footer,
	CustomerReviews,
	Services,
	Subscribe,
	SuperQuality,
	PopularProducts,
	SpecialOffers,
} from "./Sections";

import "tailwindcss/tailwind.css";

function App() {
	return (
		<main className="relative ">
			<Nav />

			<section className="xl:padding-1 wide:padding-r padding-b">
				<Hero />
			</section>

			<section className="padding">
				<PopularProducts />
			</section>

			<section className="padding">
				<SuperQuality />
			</section>

			<section className="padding-x py-10">
				<Services />
			</section>

			<section className="bg-pale-blue padding">
				<SpecialOffers />
			</section>

			<section className="padding">
				<CustomerReviews />
			</section>

			<section className="padding-x  sm:py-32 py-16 w-full">
				<Subscribe />
			</section>

			<section className="padding-x bg-black padding-t pb-8 ">
				<Footer />
			</section>
			{/* <h1 className="text-6xl">Hello welcome to tailwind</h1> */}
			{/* <Container>This is the app side</Container> */}
		</main>
	);
}

export default App;
