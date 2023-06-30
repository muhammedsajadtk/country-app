import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./routing/MainRouter";

function App() {
	return (
		<Router>
			<MainRouter />
		</Router>
	);
}

export default App;
