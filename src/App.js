import Main from "./components/Body";
import Modal from "./components/modal";
import { ContextStore } from "./hooks/context";
function App() {
	return (
		<div className="App">
			<ContextStore>
				<Main />
				<Modal />
			</ContextStore>
		</div>
	);
}

export default App;
