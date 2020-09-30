import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	article: {
		width: 350,
	},
	premTitle: {
		fontSize: "2em",
		fontWeight: 600,
		margin: "20px 0 20px",
		color: "black",
		fontFamily: "Oleo Script, cursive",
	},
	premParag: {
		marginTop: 0,
		color: "black",
		fontSize: "15px",
		fontWeight: 300,
	},
	divFlex: {
		display: "flex",
	},
	premDate: {
		background: "red",
		padding: "5px 10px",
		border: "1px solid black",
		borderRadius: 3,
		height: 15,
	},
	premName: {
		transition: ".3s ease",
		textDecoration: "none",
		color: "red",
		fontSize: "1em",
		fontWeight: 400,
		height: 15,
		margin: "22px 0px 0px 10px",
		"&:hover": {
			color: "blue",
		},
	},
});

const getMonthName = (monthNumber) => {
	switch (monthNumber) {
		case 0:
			return "January";
		case 9:
			return "October";
		case 10:
			return "November";
		case 11:
			return "December";
		default:
			return "July";
	}
};

function MoviePremiere(props) {
	const { premiereMonth, description, movies } = props;

	const classes = useStyles();

	return (
		<article className={classes.article}>
			<Typography variant="h2" component="h2" className={classes.premTitle}>
				{getMonthName(premiereMonth.getMonth())} premiere
			</Typography>
			<Typography component="p" className={classes.premParag}>
				{description}
			</Typography>
			{movies.map((movie) => (
				<div className={classes.divFlex}>
					<p className={classes.premDate}>
						{movie.date.getDate()}/{movie.date.getMonth()}
					</p>
					<p className={classes.premName}>{movie.description}</p>
				</div>
			))}
		</article>
	);
}

export default MoviePremiere;
