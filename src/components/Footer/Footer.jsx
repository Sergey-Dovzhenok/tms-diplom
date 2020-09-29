import React from "react";
import { Grid } from "@material-ui/core";
import FooterPage from "./components/FooterPage";

import { makeStyles } from "@material-ui/core/styles";

const footerData = [
    {
        title: "About us",
        info: {
            type: "text",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempore vitae mollitia nesciunt saepe cupiditate",
        },
    },
    {
        title: "Recent Review",
        info: {
            type: "array",
            description: [
                {
                    text: "Lorem ipsum dolor",
                    link: "/revews/1",
                },
                {
                    text: "Lorem ipsum dolor",
                    link: "/revews/2",
                },
                {
                    text: "Lorem ipsum dolor",
                    link: "/revews/3",
                },
                {
                    text: "Lorem ipsum dolor",
                    link: "/revews/4",
                },
            ],
        },
    },
    {
        title: "Help Center",
        info: {
            type: "array",
            description: [
                {
                    text: "Lorem ipsum dolor",
                    link: "/revews/1",
                },
                {
                    text: "Lorem ipsum dolor",
                    link: "/revews/2",
                },
                {
                    text: "Lorem ipsum dolor",
                    link: "/revews/3",
                },
                {
                    text: "Lorem ipsum dolor",
                    link: "/revews/4",
                },
            ],
        },
    },
    {
        title: "Join Us",
        info: {
            type: "array",
            description: [
                {
                    text: "Lorem ipsum dolor",
                    link: "/revews/1",
                },
                {
                    text: "Lorem ipsum dolor",
                    link: "/revews/2",
                },
                {
                    text: "Lorem ipsum dolor",
                    link: "/revews/3",
                },
                {
                    text: "Lorem ipsum dolor",
                    link: "/revews/4",
                },
            ],
        },
    },
    {
        title: "Social Media",
        info: {
            type: "array",
            description: [
                {
                    text: "Facebook",
                    link: "facebook.com",
                },
                {
                    text: "Twitter",
                    link: "twitter.com",
                },
                {
                    text: "Google+",
                    link: "google.com",
                },
                {
                    text: "Pinterest",
                    link: "pinterest.com",
                },
            ],
        },
    },
    {
        title: "Newsletter",
        info: {
            type: "form",
            formType: "email",
        },
    },
];

const useStyles = makeStyles({
    footerMain: {
        background: "black",
    },
    footer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        fontSize: "30px",
        fontWeight: 900,
    },
    footerTitle: {
        display: "flex",
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "normal",
		padding: 10,
		fontFamily: "Oleo Script, cursive",
    },
    footerinfo: {
        display: "flex",
        justifyContent: "center",
        color: "red",
        fontSize: "20px",
    },
});

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footerMain}>
            <div className={classes.footer}>
                <Grid container className={classes.footerTitle}>
                    {footerData.map((elem) => (
                        <Grid item md={2} sm={12} key={elem.title}>
                            <FooterPage title={elem.title} info={elem.info} />
                        </Grid>
                    ))}
                </Grid>
                <p className={classes.footerinfo}>
                    Copyright 2014 Company name, Designed by Themezy. All rights reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
