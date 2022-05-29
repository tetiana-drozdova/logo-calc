import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Routes,
	Navigate
} from "react-router-dom";

import {
	Define,
	Upload,
	Result
} from "./";

export default function Layout() {
	return (
		<Router>

			<Routes>
				<Route path="/" element={<Navigate replace to="/define" />} />
				<Route exact path="/define" element={<Define />} />
				<Route exact path="/upload" element={<Upload />} />
				<Route exact path="/result" element={<Result />} />
			</Routes>

			<hr />

			<ul>
				<li>
					<Link to="/define">Define</Link>
				</li>
				<li>
					<Link to="/upload">Upload</Link>
				</li>
				<li>
					<Link to="/result">Result</Link>
				</li>
			</ul>

		</Router>
	);
}