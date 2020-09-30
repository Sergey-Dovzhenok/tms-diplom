import React from "react";

function InfoText({ info }) {
	return (
		<div>
			<p data-testid="info">{info}</p>
		</div>
	);
}

export default InfoText;
