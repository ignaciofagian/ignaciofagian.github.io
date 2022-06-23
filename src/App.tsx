import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GetInTouch from './components/GetInTouch';
import Skills from './components/Skills';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

ReactGA.initialize('G-DYK0MT3LVF', {
	debug: false,
});

export default function App() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
  
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<About />
				<Education />
				<Experience />
				<Skills />
				<Projects />
				<GetInTouch />
				<Footer />
			</div>
		</BrowserRouter>
	);
}
