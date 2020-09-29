import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShows } from "../../actions/shows";
import { getPremieres } from "../../actions/premieres";
import ShowsGallery from "../../components/ShowsGallery";
import { makeStyles } from "@material-ui/styles";
import Premieres from "./components/Premieres";

const useStyles = makeStyles({
    root: {
        width: "1100px",
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        padding: 20,
    },
});

function Home(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const shows = useSelector((state) => state.show.shows);
    useEffect(() => {
        dispatch(getShows(1));
        dispatch(getPremieres());
    }, [dispatch]);

    return (
        <div className={classes.root}>
            <ShowsGallery cardSize={"sm"} shows={shows} />

            <Premieres />
        </div>
    );
}


export default Home;
