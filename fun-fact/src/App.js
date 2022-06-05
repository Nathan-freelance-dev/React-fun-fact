import Header from './components/header';
import './App.css';
import logo from './logo.svg'
import FunFact from './components/funFact';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Header />

			<img src={logo} className="App-logo" alt="logo" />
			<FunFact />
			<Footer />
		</div>
	);
}

export default App;
