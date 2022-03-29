import logo from "./logo.svg";
import "./App.css";
import TodoFeature from "./features";
import SongFeatures from "./features/Song/components";
import ColorBox from "./components/ColorBox/color";

function App() {
	const name = "Tuan";
	const age = 21;
	const isMale = true;
	const student = {
		name: "tuan",
	};
	const colorList = ["red", "green", "black"];
	return (
		<div className="App">
			<ColorBox />
		</div>
	);
}

export default App;
