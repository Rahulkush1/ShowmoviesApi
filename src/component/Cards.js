import React from "react";

function Cards(props) {
	return (
		<>
			{/* <div className="col-lg-4">
				<div className="card">
					<img className="card-img-top" src={img} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{shows}</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div> */}
            <h1>{props.name}</h1>
		</>
	);
}

export default Cards;
