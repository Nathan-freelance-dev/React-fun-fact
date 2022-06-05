import Header from './components/header';
import './App.css';
import logo from './logo.svg'

function App() {
	return (
		<div className="App">
			<Header />

			<img src={logo} className="App-logo" alt="logo" />
		</div>
	);
}

export default App;
