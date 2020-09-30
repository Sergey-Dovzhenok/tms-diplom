import React, { useEffect, useState } from "react";
import { getShows, setSearchedShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import { Pagination } from "@material-ui/lab";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ALL_YEARS = "All";
const ALL_GENRES = "All";
var _ = require("lodash");

const useStyles = makeStyles({
	movieBody: {
		display: "flex",
		flexDirection: "column",
	},
	pagin: {
		display: "flex",
		justifyContent: "center",
		marginBottom: 10,
	},
	colorSorted: {
		padding: "5px 5px 5px 5px",
		background: "red",
		width: 250,
		fontSize: "20px",
		fontWeight: "600",
	},
});

function MovieReviews() {
	const dispatch = useDispatch();
	const [from, setFrom] = useState(0);
	const [count, setCount] = useState(0);
	const [premiered, setYears] = useState([]);
	const [selectedYear, setSelectedYear] = useState(ALL_YEARS);
	const [selectedGenre, setSelectedGenre] = useState(ALL_GENRES);
	const [genres, setGenres] = useState([]);
	const [page, setPage] = useState(0);
	const { shows, searchedShows } = useSelector((state) => state.show);

	const showsPerPage = 8;

	useEffect(() => {
		dispatch(getShows(1));
	}, [dispatch]);

	useEffect(() => {
		if (shows) {
			const oldYearSet = shows.flatMap((show) => show.premiered);
			var newArrDate = [];
			for (let index = 0; index < oldYearSet.length; index++) {
				if (oldYearSet[index]) {
					let date = oldYearSet[index];
					var newData = date.substring(0, 4);
				}
				newArrDate.push(newData);
			}
			const yearsSetSort = new Set(
				newArrDate.sort(function (a, b) {
					return b - a;
				}),
			);
			setYears([...yearsSetSort.values()]);
		}
	}, [dispatch, shows]);

	useEffect(() => {
		if (shows) {
			const genresSet = shows.flatMap((show) => show.genres);
			const genresSetSort = new Set(genresSet.sort());
			setGenres([...genresSetSort.values()]);
		}
	}, [dispatch, shows]);

	useEffect(() => {
		if (shows) {
			var newShows = searchedShows === null ? shows : searchedShows;
			setCount(Math.ceil(newShows.length / showsPerPage));
			setPage(1);
			setFrom(0);
		}
	}, [dispatch, searchedShows]);

	useEffect(() => {
		if (shows) {
			if (selectedYear !== ALL_YEARS || selectedGenre !== ALL_GENRES) {
				let filteredShows;
				let newShows;

				if (selectedYear !== ALL_YEARS && selectedGenre === ALL_GENRES) {
					newShows = shows;
					const filteredShowsYear = newShows.filter((show) => {
						if (show.premiered) {
							const newShowDate = show.premiered.substring(0, 4);
							return newShowDate.includes(selectedYear);
						}
					});
					filteredShows = filteredShowsYear;
				}

				if (selectedYear === ALL_YEARS && selectedGenre !== ALL_GENRES) {
					newShows = shows;
					const filteredShowsGenre = newShows.filter((show) => {
						return show.genres.includes(selectedGenre);
					});
					filteredShows = filteredShowsGenre;
				}

				if (selectedYear !== ALL_YEARS && selectedGenre !== ALL_GENRES) {
					newShows =
						searchedShows.length < shows.length && searchedShows.length !== 0
							? searchedShows
							: shows;
					const filteredShowsYear = newShows.filter((show) => {
						if (show.premiered) {
							const newShowDate = show.premiered.substring(0, 4);
							return newShowDate.includes(selectedYear);
						}
					});
					const filteredShowsGenre = newShows.filter((show) => {
						return show.genres.includes(selectedGenre);
					});
					filteredShows = _.intersection(filteredShowsYear, filteredShowsGenre);
				}

				console.log(filteredShows, "Отфильтрованные шоу");
				dispatch(setSearchedShows(filteredShows));
			} else {
				dispatch(setSearchedShows(shows));
			}
		}
	}, [dispatch, premiered, selectedYear, selectedGenre, shows]);

	const handleChange = (event, page) => {
		setFrom((page - 1) * showsPerPage);
		setPage(page);
	};

	const handleSelectChange = (event) => {
		setSelectedYear(event.target.value);
	};

	const handleSelectChangeGenre = (event) => {
		setSelectedGenre(event.target.value);
	};

	const classes = useStyles();

	return (
		<div className={classes.movieBody}>
			<Select
				value={selectedYear}
				onChange={handleSelectChange}
				className={classes.colorSorted}
			>
				<MenuItem value="All">Sorted by year</MenuItem>
				{premiered.map((year) => (
					<MenuItem key={year} value={year}>
						{year}
					</MenuItem>
				))}
			</Select>

			<Select
				value={selectedGenre}
				onChange={handleSelectChangeGenre}
				className={classes.colorSorted}
			>
				<MenuItem value="All">Sorted by genre</MenuItem>
				{genres.map((genre) => (
					<MenuItem key={genre} value={genre}>
						{genre}
					</MenuItem>
				))}
			</Select>
			<Pagination
				page={page}
				color="secondary"
				className={classes.pagin}
				count={count}
				variant="outlined"
				onChange={handleChange}
				shape="rounded"
			/>

			<ShowsGallery
				shows={searchedShows}
				isReviewsPage
				showsPerPage={showsPerPage}
				from={from}
				cardSize={"lg"}
			/>
			<Pagination
				page={page}
				color="secondary"
				className={classes.pagin}
				count={count}
				variant="outlined"
				onChange={handleChange}
				shape="rounded"
			/>
		</div>
	);
}

export default MovieReviews;
