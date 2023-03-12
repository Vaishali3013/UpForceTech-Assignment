import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Details = ({ activeStep, handleNext, handleBack }) => {
	const state = useSelector((store) => store.app);
	const style = {
		width: "100%",
		bgcolor: "background.paper",
	};
	console.log(state);

	return (
		<div>
			<Paper>
				<Typography variant="h4" sx={{ ml: "1rem", color: "green" }}>
					Data Added Successfully
				</Typography>
				<List sx={style} component="nav" aria-label="mailbox folders">
					{state &&
						Object.entries(state).map((item) => (
							<>
								<ListItem>
									{/* <ListItemText primary={item[0]} /> */}
									{/* <ListItemText primary={item[1]} /> */}
									<Grid container>
										<Grid item xs={6}>
											<Typography sx={{ width: "300px" }}>{item[0]}</Typography>{" "}
										</Grid>
										<Grid item xs={6}>
											<Typography>{item[1]}</Typography>
										</Grid>
									</Grid>
								</ListItem>
								<Divider />
							</>
						))}
				</List>
			</Paper>
			
		</div>
	);
};

export default Details;
