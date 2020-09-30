import React from "react";
import PropTypes from "prop-types";
import { Grid, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	nav: {
		background: "black",
		flexDirection: "row",
		padding: "2vw 0px",
		color: "red",
		fontSize: "1vw",
		fontWeight: 200,
		lineHeight: "normal",
		fontFamily: "Oleo Script, cursive",
		flexWrap: "wrap",
	},
	navLogo: {
		textTransform: "uppercase",
		display: "flex",
		height: 77,
		maxWidth: 270,
		justifyContent: "center",
		alignItems: "center",
	},
	navLink: {
		marginLeft: "1vw",
		padding: "0.5vw 0.7vw",
		fontWeight: 900,
		borderRadius: "5px",
		textDecoration: "none",
		color: "white",

		"&:hover": {
			padding: "10px 15px 7px 15px",
			borderBottom: "3px solid white",
			background: "#ffa023",
		},
	},
	navName: {
		margin: "0px 20px",
		color: "red",
		fontWeight: 700,
		fontFamily: "Dancing Script, cursive",
		fontSize: "0.85vw",
	},
});

function Header(props) {
	const { routes } = props;
	const classes = useStyles();

	return (
		<Grid container justify="space-between" className={classes.navContainer}>
			<Grid item xs={2} className={classes.navLogo}>
				<img src={require("../images/pic/logo.png")} alt="logo" />
				<div className={classes.navName}>
					<div>Company Name</div>
					<div>Tagline goes here</div>
				</div>
			</Grid>
			<Grid item xs={4} className={classes.resetPadding}>
				<AppBar position="static" className={classes.nav}>
					{routes.map((elem) => (
						<Link to={elem.path} key={elem.name} className={classes.navLink}>
							{elem.name}
						</Link>
					))}
				</AppBar>
			</Grid>
		</Grid>
	);
}

Header.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		}),
	),
};

export default Header;
