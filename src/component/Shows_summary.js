import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Shows_summary() {
	const { id } = useParams();
	const [data, setData] = useState([]);
	

	

	const summary = data.summary;

	const getData = async () => {
		try {
			const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
			console.log(res.data);
			setData(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getData();
	});

	console.log(id);
	return (
		<>
			<div className="card summary">
				<div className="card-header">Summary</div>
				<div className="card-body">
					<h5 className="card-title">{data.name}</h5>
					<p className="card-text">{summary}</p>
					
				

			<button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal">
				Book Movie Ticket
			</button>

			<div
				className="modal fade"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Book Movie Ticket
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form>
								<div className="mb-3">
									<label for="exampleInputEmail1" className="form-label">
										Enter your name
									</label>
									<input
										type="text"
										className="form-control"
										id="exampleInputEmail1"
										name="Name"
										aria-describedby="emailHelp"
										
									/>
								</div>
								<div className="mb-3">
									<label for="exampleInputPassword1" className="form-label">
										Movie Name
									</label>
									<input
										type="text"
										className="form-control"
										id="exampleInputPassword1"
										name="Mname"
										readOnly
									/>
								</div>
								<div className="mb-3">
									<label for="exampleInputPassword1" className="form-label">
										Movie id
									</label>
									<input
										type="number"
										className="form-control"
										id="exampleInputPassword1"
										name="mid"
										value={id}
										readOnly
									/>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								Close
							</button>
							<button
								type="submit"
								className="btn btn-primary"
								>
								Book
							</button>
						</div>
					</div>
				</div>
			</div>
			</div>
			</div>
		</>
	);
}

export default Shows_summary;
