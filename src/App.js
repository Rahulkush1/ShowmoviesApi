import React from "react";
import { Routes, Route } from "react-router-dom";

import Shows from "./component/Shows";
import Shows_summary from "./component/Shows_summary";

export default function App() {
	return (
		<>
			
			<Routes>
                                <Route exact path="/" element={<Shows/>}/>
				<Route exact path="/showsummary/:id" element={<Shows_summary />} />
			</Routes>
		</>
	);
}
