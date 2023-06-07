import Main from "./components/Body";
import { ContextStore } from "./hooks/context";
function App() {
	return (
		<div className="App">
			<ContextStore>
				<Main />
			</ContextStore>
		</div>
	);
}

export default App;
