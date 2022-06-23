import { createRef, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Particles from './Particles';
import ScrollspyNav from 'react-scrollspy-nav';

export default function Header() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [navClass, setNavClass] = useState('');
	const pageRef = useRef();

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, []);

	const controlNavbar = () => {
		const node: any = pageRef.current;
		if (node?.offsetHeight) {
			if (window.scrollY > node?.offsetHeight - 10) {
				setNavClass('fixedNavbar');
			} else {
				setNavClass('');
			}
		}
	};

	const handleClick = () => setIsOpen(!isOpen);

	return (
		<>
			<nav className={`navbar ${navClass}`}>
				<div className="nav-container">
					<ScrollspyNav
						scrollTargetIds={['about', 'education', 'experiences', 'skills', 'projects', 'getintouch']}
						activeNavClass="is-active"
						scrollDuration="1000"
						headerBackground="true"
					>
						<ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
							<li className="nav-item">
								<a href="#about" ref={createRef()} className="nav-links" onClick={handleClick}>
									About
								</a>
							</li>
							<li className="nav-item">
								<a href="#education" ref={createRef()} className="nav-links" onClick={handleClick}>
									Education
								</a>
							</li>
							<li className="nav-item">
								<a href="#experiences" ref={createRef()} className="nav-links" onClick={handleClick}>
									Experience
								</a>
							</li>
							<li className="nav-item">
								<a href="#skills" ref={createRef()} className="nav-links" onClick={handleClick}>
									Skills
								</a>
							</li>
							<li className="nav-item">
								<a href="#projects" ref={createRef()} className="nav-links" onClick={handleClick}>
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a href="#getintouch" className="nav-links" onClick={handleClick}>
									Get in touch
								</a>
							</li>
						</ul>
					</ScrollspyNav>
					<div className="nav-icon" onClick={handleClick}>
						<FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
					</div>
				</div>
			</nav>

			{/* @ts-ignore */}
			<div ref={pageRef} className="header">
				<Particles />
				<div className="content">
					<div className="icon">
						<img alt="laptop coding" src="assets/laptop-code.svg" />
					</div>
					<div className="title">Ignacio Fagián</div>
					<div className="description">Software Engineer, Full-Stack Developer</div>
					<div className="links">
						<a className="btn" href="https://github.com/ignaciofagian" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faGithub} />
							GitHub
						</a>
						<a
							className="btn"
							href="https://www.linkedin.com/in/ignacio-fagian-72b26357"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedin} />
							Linkedn
						</a>
					</div>
				</div>

				<p className="scrolldown">
					<a className="smoothscroll" href="#about">
						<FontAwesomeIcon icon={faAngleDown} />
					</a>
				</p>
			</div>
		</>
	);
}
