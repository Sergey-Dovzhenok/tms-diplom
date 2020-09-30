import React from "react";
import ShowCard from "./ShowCard";
import { Grid } from "@material-ui/core";

function ShowsGallery({ shows, showsPerPage = 7, isReviewsPage = false, from = 0, cardSize }) {
	return (
		<Grid
			container
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-around",
				marginTop: 50,
			}}
		>
			{shows
				? shows
						.filter((show, index) => index >= from)
						.filter((show, index) => index < showsPerPage)
						.map((show) => (
							<Grid item lg={3} md={4} sm={6} xs={12} key={show.id}>
								<ShowCard
									src={show.image ? show.image.medium : ""}
									id={show.id}
									title={isReviewsPage ? show.name : undefined}
									description={isReviewsPage && show.summary}
									isReviewsPage={isReviewsPage}
									size={cardSize}
								/>
							</Grid>
						))
				: null}
		</Grid>
	);
}

export default ShowsGallery;
