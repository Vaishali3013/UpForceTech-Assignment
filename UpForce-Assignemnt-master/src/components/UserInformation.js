import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, FormControlLabel, FormHelperText, FormLabel, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../redux/appSlice";
import dayjs from "dayjs";

const UserInformation = ({ activeStep, handleNext, handleBack }) => {
	const [userInfo, setUserInfo] = useState({
		firstName: null,
		middleName: null,
		lastName: null,
		mobileNo: null,
		email: null,
		birthday: null,
		age: null,
		bloodGroup: null,
		height: null,
		weight: null,
		gender: null,
		maritalState: null,
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
						error={isError && userInfo["firstName"] === null}
						id="outlined-basic"
						sx={{ width: "90%" }}
						onChange={(e) => handleReduxStateChange("firstName", e.target.value)}
						label="First Name"
						variant="outlined"
						helperText={isError && userInfo["firstName"] === null ? "First Name is required" : ""}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						error={isError && userInfo["middleName"] === null}
						id="outlined-basic"
						sx={{ width: "90%" }}
						onChange={(e) => handleReduxStateChange("middleName", e.target.value)}
						label="Middle Name"
						variant="outlined"
						helperText={isError && userInfo["middleName"] === null ? "Middle Name is required" : ""}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						error={isError && userInfo["lastName"] === null}
						helperText={isError && userInfo["lastName"] === null ? "Last Name is required" : ""}
						id="outlined-basic"
						sx={{ width: "90%" }}
						onChange={(e) => handleReduxStateChange("lastName", e.target.value)}
						label="Last Name"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						error={isError && userInfo["mobileNo"] === null}
						id="outlined-basic"
						sx={{ width: "90%" }}
						onChange={(e) => handleReduxStateChange("mobileNo", e.target.value)}
						label="Mobile No"
						variant="outlined"
						helperText={isError && userInfo["mobileNo"] === null ? "Mobile is required" : ""}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						error={isError && userInfo["email"] === null}
						id="outlined-basic"
						sx={{ width: "90%" }}
						onChange={(e) => handleReduxStateChange("email", e.target.value)}
						label="Email"
						variant="outlined"
						helperText={isError && userInfo["email"] === null ? "Email is required" : ""}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl error={isError && userInfo["gender"] === null} sx={{ width: "100%" }}>
						<LocalizationProvider error dateAdapter={AdapterDayjs}>
							<DatePicker
								error={isError && userInfo["birthday"] === null}
								onChange={(e) => handleReduxStateChange("birthday", dayjs(e).format("DD/MM/YYYY"))}
								label="Birthday"
								sx={{ width: "90%" }}
								helperText={isError && userInfo["birthday"] === null ? "Birthday is required" : ""}
							/>
						</LocalizationProvider>
						{isError && userInfo["birthday"] === null ? <FormHelperText>Birthdate is required</FormHelperText> : null}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						error={isError && userInfo["age"] === null}
						id="outlined-basic"
						sx={{ width: "90%" }}
						onChange={(e) => handleReduxStateChange("age", e.target.value)}
						label="Age"
						variant="outlined"
						helperText={isError && userInfo["age"] === null ? "Age is required" : ""}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl error={isError && userInfo["bloodGroup"] === null} sx={{ width: "90%" }}>
						<InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
						<Select
							error={isError && userInfo["bloodGroup"] === null}
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Age"
							onChange={(e) => handleReduxStateChange("bloodGroup", e.target.value)}
						>
							<MenuItem value="A">A</MenuItem>
							<MenuItem value="B">B</MenuItem>
						</Select>
						{isError && userInfo["bloodGroup"] === null ? <FormHelperText>Blood group is required</FormHelperText> : null}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						error={isError && userInfo["height"] === null}
						id="outlined-basic"
						sx={{ width: "90%" }}
						onChange={(e) => handleReduxStateChange("height", e.target.value)}
						label="Height"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						error={isError && userInfo["weight"] === null}
						id="outlined-basic"
						sx={{ width: "90%" }}
						onChange={(e) => handleReduxStateChange("weight", e.target.value)}
						label="Weight"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl error={isError && userInfo["gender"] === null} sx={{ width: "90%" }}>
						<FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
						<RadioGroup
							row
							aria-labelledby="demo-row-radio-buttons-group-label"
							name="row-radio-buttons-group"
							onChange={(e) => handleReduxStateChange("gender", e.target.value)}
						>
							<FormControlLabel value="male" control={<Radio />} label="Male" />
							<FormControlLabel value="female" control={<Radio />} label="Female" />
						</RadioGroup>
						{isError && userInfo["gender"] === null ? <FormHelperText>Gender is required</FormHelperText> : null}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl error={isError && userInfo["maritalState"] === null} sx={{ width: "90%" }}>
						<FormLabel id="demo-row-radio-buttons-group-label">Marital Status</FormLabel>
						<RadioGroup
							row
							aria-labelledby="demo-row-radio-buttons-group-label"
							name="row-radio-buttons-group"
							onChange={(e) => handleReduxStateChange("maritalState", e.target.value)}
						>
							<FormControlLabel value="Single" control={<Radio />} label="Single" />
							<FormControlLabel value="Married" control={<Radio />} label="Married" />
							<FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
							<FormControlLabel value="Widowed" control={<Radio />} label="Widowed" />
						</RadioGroup>
						{isError && userInfo["maritalState"] === null ? <FormHelperText>Marital status is required</FormHelperText> : null}
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

export default UserInformation;
