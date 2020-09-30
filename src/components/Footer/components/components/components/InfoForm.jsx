import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";

const useStyles = makeStyles({
	form: {
		color: "#FFFFFF",
		border: "1px solid #bec1c8",
		borderRadius: "5px",
		padding: "10px",
		fontSize: "17px",
		"&:hover": {
			border: "2px solid red",
		},
	},
});

function InfoForm({ info }) {
	const classes = useStyles();

	return (
		<form>
			<Input type={info} className={classes.form} placeholder="Email Address"></Input>
		</form>
	);
}

export default InfoForm;
