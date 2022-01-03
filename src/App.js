import { Helmet } from 'react-helmet';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Helmet>
				<title>Healthy Eating</title>
			</Helmet>
			<div className="App">
				<Header />
				<Content />
				<Footer />
			</div>
		</>
	);
}

export default App;
