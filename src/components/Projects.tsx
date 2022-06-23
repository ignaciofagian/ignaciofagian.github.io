export default function Projects() {
	return (
		<section className="projects container" id="projects">
			<div className="section-title">Projects</div>
			<div className="row">
				<Item
					title="Blockchain Token tracker"
					subtitle="ReactJs, NodeJs, TypeORM, Web3"
					image={`captura.jpg`}
					text={`A website where we can view the last 100 tokens deployed on BSC blockchain. Include all the tokens information like name, contract, with associated safety information`}
				/>
				<Item
					title="Telegram bot"
					subtitle="NodeJs, Web3"
					image={`captura.jpg`}
					text={`A telegram bot built in nodejs, it call smart contract function and print result in a specific telegram group`}
				/>
				<Item
					title="Portfolio web"
					subtitle="ReactJs, CSS3, HTML5"
					image={`portfolio-screenshot.png`}
					text={`This project contains code for the present portfolio.`}
				/>
			</div>
		</section>
	);
}

function Item({ title, subtitle, text, image }: any) {
	return (
		<div className="col-md-4 col-bleed project">
			<div className="project-title">{title}</div>
			<div className="project-subtitle">{subtitle}</div>
			<div className="project-content">
				<div className="project-image">
					<img src={`assets/${image}`} alt={title} />
				</div>
				<p>{text}</p>
				<div className="project-links"></div>
			</div>
		</div>
	);
}
