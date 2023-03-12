import { Box, Paper } from "@mui/material";
import HorizontalLinearStepper from "./components/MainForm";
import store  from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
		<div className="App">
			<div className="main_Container">
				<Provider store={store}>
					<Paper>
						<HorizontalLinearStepper />
					</Paper>
				</Provider>
			</div>
		</div>
	);
}

export default App;
