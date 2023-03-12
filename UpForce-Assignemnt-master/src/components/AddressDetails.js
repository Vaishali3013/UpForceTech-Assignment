import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, FormHelperText, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../redux/appSlice";

const AddressDetails = ({ activeStep, handleNext, handleBack }) => {
	const [userInfo, setUserInfo] = useState({
		addressLine1: null,
		addressLine2: null,
		city: null,
		state: null,
		country: null,
		pincode: null,
	});
	const [isError, setIsError] = useState(false);
	const dispatch = useDispatch();

	const handleReduxStateChange = (type, value) => {
		dispatch(updateState({ type, value }));
		setUserInfo({ ...userInfo, [type]: value });
	};

	const handleBetterNext = () => {
		const nullFormData = [];
		Object.values(userInfo).map((item) => {
			if (item === null) nullFormData.push(item);
		});

		if (nullFormData.length > 0) {
			setIsError(true);
		} else {
			handleNext();
		}
	};

	return (
		<div>
			<Grid container rowSpacing={1} sx={{ margin: "1rem" }}>
				<Grid item xs={12} md={6}>
					<TextField
						error={isError && userInfo["addressLine1"] === null}
						helperText={isError && userInfo["addressLine1"] === null ? "Address line 1 is required" : ""}
						id="outlined-basic"
						sx={{ width: "90%" }}
						onChange={(e) => handleReduxStateChange("addressLine1", e.target.value)}
						label="Address Line 1"
						variant="outlined"
						value={userInfo.addressLine1}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						error={isError && userInfo["addressLine2"] === null}
						helperText={isError && userInfo["addressLine2"] === null ? "Address line 2 is required" : ""}
						id="outlined-basic"
						sx={{ width: "90%" }}
						onChange={(e) => handleReduxStateChange("addressLine2", e.target.value)}
						label="Address Line 2"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl error={isError && userInfo["city"] === null} sx={{ width: "90%" }}>
						<InputLabel id="demo-simple-select-label">City</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="City"
							onChange={(e) => handleReduxStateChange("city", e.target.value)}
						>
							<MenuItem value="A">A</MenuItem>
							<MenuItem value="B">B</MenuItem>
						</Select>
						{isError && userInfo["city"] === null ? <FormHelperText>City is required</FormHelperText> : null}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl error={isError && userInfo["state"] === null} sx={{ width: "90%" }}>
						<InputLabel id="demo-simple-select-label">State</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="State"
							onChange={(e) => handleReduxStateChange("state", e.target.value)}
						>
							<MenuItem value="A">A</MenuItem>
							<MenuItem value="B">B</MenuItem>
						</Select>
						{isError && userInfo["state"] === null ? <FormHelperText>State is required</FormHelperText> : null}
					</FormControl>
				</Grid>

				<Grid item xs={12} md={6}>
					<FormControl error={isError && userInfo["country"] === null} sx={{ width: "90%" }}>
						<InputLabel id="demo-simple-select-label">Country</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="State"
							onChange={(e) => handleReduxStateChange("country", e.target.value)}
						>
							<MenuItem value="A">A</MenuItem>
							<MenuItem value="B">B</MenuItem>
						</Select>
						{isError && userInfo["country"] === null ? <FormHelperText>Country is required</FormHelperText> : null}
					</FormControl>
				</Grid>

				<Grid item xs={12} md={6}>
					<FormControl error={isError && userInfo["pincode"] === null} sx={{ width: "90%" }}>
						<InputLabel id="demo-simple-select-label">Pincode</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="State"
							onChange={(e) => handleReduxStateChange("pincode", e.target.value)}
						>
							<MenuItem value="A">A</MenuItem>
							<MenuItem value="B">B</MenuItem>
						</Select>
						{isError && userInfo["pincode"] === null ? <FormHelperText>Pincode is required</FormHelperText> : null}
					</FormControl>
				</Grid>
			</Grid>
			<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
				<Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
					Back
				</Button>
				<Box sx={{ flex: "1 1 auto" }} />

				{activeStep !== 2 && <Button onClick={handleBetterNext}>Next</Button>}
			</Box>
		</div>
	);
};

export default AddressDetails;
