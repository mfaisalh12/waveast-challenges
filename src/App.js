import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<div className="App">
			<Container>
				<Header />
				<Content />
			</Container>
			<Footer />
		</div>
	);
}

export default App;
