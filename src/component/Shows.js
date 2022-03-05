import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Shows() {
	const [data, setData] = useState([]);

	const getData = async () => {
		try {
			const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
			console.log(res.data);
			setData(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getData();
	});
	return (
		<>
			<h1 className="text-center Header_name">React js Application for Series of Shows</h1>
			<div className="container">
				<div className="row">
					{data.map((current, index) => {
						return (
							<>
								<div className="col-lg-4 col-md-6 " key={current.index}>
									<div className="card mx-3 my-5">
										<img
											className="card-img-top "
											src={current.show.image.original}
											alt="Card image cap"
										/>

										<div class="card-header">{current.show.name}</div>
										<div class="card-body">
											<h5 class="card-title"> Language : {current.show.language}</h5>
											
											<h5 className="card-title">Genres : {current.show.genres}</h5>
											<h5 className="card-title">
												Schedule :<br></br>
												Day : <span>{current.show.schedule.days}</span> {" "}
												 Time : <span> {current.show.schedule.time}</span>
											</h5>
											<h5 className="card-title">Status : {current.show.status}</h5>
											<h5 className="card-title">
												
												Rating : {current.show.rating.average}
											</h5>

											<h5 className="card-title">{current.show.s}</h5>
										</div>

										<NavLink
											to={`/showsummary/${current.show.id}`}
											className="btn btn-primary">
											View Summary
										</NavLink>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Shows;
