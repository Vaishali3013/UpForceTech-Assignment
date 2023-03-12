import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UserInformation from "./UserInformation";
import AddressDetails from "./AddressDetails";
import Details from "./Details";
import { useDispatch, useSelector } from "react-redux";
import { updateError } from "../redux/errorSlice";

const steps = ["User Information", "Address Details", "Thank You"];

export default function HorizontalLinearStepper() {
	const dispatch = useDispatch();
	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());

	const isButtonClicked = useSelector((store) => store.error.userInformationClicked);

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}
		if (activeStep === 0) {
			dispatch(updateError(true));
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<div className="topStepper">
				<Box className="innerMainStepper">
					<Stepper activeStep={activeStep}>
						{steps.map((label, index) => {
							const stepProps = {};
							const labelProps = {};
							if (isStepSkipped(index)) {
								stepProps.completed = false;
							}
							return (
								<Step key={label} {...stepProps}>
									<StepLabel {...labelProps}>{label}</StepLabel>
								</Step>
							);
						})}
					</Stepper>
				</Box>
			</div>
			{activeStep === steps.length ? (
				<React.Fragment>
					<Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Box sx={{ flex: "1 1 auto" }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</React.Fragment>
			) : (
				<React.Fragment>
					{activeStep === 0 ? (
						<UserInformation activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
					) : activeStep === 1 ? (
						<AddressDetails activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
					) : activeStep === 2 ? (
						<Details activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
					) : null}
				</React.Fragment>
			)}
		</Box>
	);
}
