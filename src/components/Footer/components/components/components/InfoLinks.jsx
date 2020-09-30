import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	ulStyle: {
		textDecoration: "none",
		paddingTop: "15px",
	},
	liStyle: {
		"&:hover": {
			color: "red",
		},
	},
});

function InfoLinks({ info }) {
	const classes = useStyles();

	const modifiedInfo = info.map((elem) => {
		if (elem.link.startsWith("/")) {
			return {
				...elem,
				inner: true,
			};
		} else {
			return {
				...elem,
				inner: false,
			};
		}
	});

	return (
		<ul className={classes.ulStyle}>
			{modifiedInfo.map((elem, id) => (
				<li className={classes.liStyle} key={id}>
					{elem.inner ? (
						<Link to={elem.link}>{elem.text}</Link>
					) : (
						<a target="_blank" rel="noopener noreferrer" href={`https://${elem.link}`}>
							{elem.text}
						</a>
					)}
				</li>
			))}
		</ul>
	);
}

export default InfoLinks;
