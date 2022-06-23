const skills = [
	{ id: 1, image: 'reactjs.svg', alt: 'ReactJS', description: 'ReactJS' },
	{ id: 2, image: 'angular.svg', alt: 'Angular', description: 'Angular' },
	{ id: 3, image: 'javascript.svg', alt: 'Javascript', description: 'Javascript' },
	{ id: 4, image: 'typescript.svg', alt: 'Typescript', description: 'Typescript' },
	{ id: 5, image: 'html5.svg', alt: 'Html5', description: 'Html5' },
	{ id: 6, image: 'redux.svg', alt: 'Redux', description: 'Redux' },
	{ id: 7, image: 'git.svg', alt: 'Git', description: 'Git' },
	{ id: 8, image: 'bootstrap.svg', alt: 'Bootstrap', description: 'Bootstrap' },
	{ id: 9, image: 'esri.svg', alt: 'Esri', description: 'Esri' },
	{ id: 10, image: 'microsoft-sql-server.svg', alt: 'MSQL Server', description: 'MSQL Server' },
	{ id: 11, image: 'nextjs.svg', alt: 'NextJS', description: 'NextJS' },
	{ id: 12, image: 'd3.svg', alt: 'D3', description: 'D3' },
	{ id: 13, image: 'netcore.svg', alt: 'NETCore', description: 'NETCore' },
	{ id: 14, image: 'python.svg', alt: 'Python', description: 'Python' },
	{ id: 15, image: 'css-3.svg', alt: 'CSS3', description: 'CSS3' },
	{ id: 16, image: 'solidity.svg', alt: 'Solidity', description: 'Solidity' },
];

export default function Skills() {
	return (
		<section className="skills container" id="skills">
			<div className="section-title">Skills</div>
			<div className="skill-list">
				{skills.map((skill: { id: number; image: string; alt: string; description: string }) => (
					<div key={`skill-${skill.id}`} className="skill">
						<img src={`assets/${skill.image}`} alt={skill.alt} />
						<span>{skill.description}</span>
					</div>
				))}
			</div>
		</section>
	);
}
