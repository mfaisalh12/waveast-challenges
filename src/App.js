import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function App() {
	return (
		<>
			<Helmet>
				<title>Resto App</title>
			</Helmet>
			<div className="App">
				<Container>
					<Header />
					<Content />
				</Container>
				<Footer />
			</div>
		</>
	);
}

export default App;
