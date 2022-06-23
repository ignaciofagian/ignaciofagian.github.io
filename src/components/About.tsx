export default function About() {
	return (
		<section className="about container" id="about">
			<div className="section-title">About me</div>
			<div className="row">
				<div className="col-md-3">
					<div className="avatar">
						<div className="avatar-img">
							<img src="./assets/me.png" alt="Ignacio" />
						</div>
					</div>
				</div>
				<div className="col-md-9">
					<p>
            I am a Professional FullStack Software Engineer. 
            <br/>My core skill is based on JavaScript and I love to do
						most of the things using JavaScript.<br/>
						I have graduated with a degree in Computer Engineering from Republic University at
						Montevideo, Uruguay.<br/>
						I have more than 8 years experience skilled in NodeJS, React, Redux, Javascript,
						Postgres, SQLServer, GIS.
					</p>
				</div>
			</div>
		</section>
	);
}
