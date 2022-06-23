export default function Experience() {
	return (
		<section className="experiences container" id="experiences">
			<div className="section-title">Experience</div>
			<Item
				id="1"
				title="Brokerware"
				subtitle="Full stack developer 2015 - now"
				logo="assets/bw-logo.png"
				tags={['C#', 'React', 'SQLServer', 'NodeJS', 'Genexus']}
				text={`Develop a market order managment system with ReactJS.
        Develop real time system using websocket (socketio) technologies.Technical leader & Software architect.
        Worked on large project using ReactJS, NodeJS y Genexus as technologies.
        Develop a market order routing platform using FIX Protocol with a plugin system architecture built in NetCore 3.`}
			/>

			<Item
				id="2"
				title="MVOT - Direccion de Ordenamiento Territorial"
				subtitle="Full stack GIS developer 2016 - now"
				logo="assets/gubuy-logo.png"
				tags={['C#', 'SQLServer', 'React', 'NodeJS', 'CSS', 'Python', 'GIS']}
				text={`Develop web map visualizers (ArcGIS js, React). Geoprocess implementation published as web service.
        GIS data base design (PostGIS, SQLServer).
        GIS Infraestructure administrador (ArcGIS Server, Portal for ArcGIS, GeoServer).
        Maintenance of many system developed in .Net (C#).`}
			/>

			<Item
				id="2"
				title="PNUD - Platform project"
				subtitle="Full stack GIS 2021"
				logo="assets/gubuy-logo.png"
				tags={['C#', 'SQLServer', 'React', 'NodeJS', 'CSS', 'GIS']}
				text={`Development of a GIS dashboard Platform using NextJS, Sequelize y ArcGIS JS.`}
			/>

			<Item
				id="4"
				title="Brokerware"
				subtitle="Junior developer 2014"
				logo="assets/bw-logo.png"
				tags={['SQLServer', 'Genexus']}
				text={`Maintenance of many system using Genexus Evo3 (c#) as the main technology. 
        Development in AngularJS, give the solution to a performance issues.
        Implement chart graphic components using D3js.`}
			/>
		</section>
	);
}

function Item({ id, title, subtitle, logo, tags, text }: any) {
	return (
		<div className="experience">
			<div className="experience-title">
				{title}
				<div className="company">
					<div className="company-image">
						<img alt={title} src={logo} />
					</div>
				</div>
			</div>
			<div className="experience-subtitle">{subtitle}</div>
			<div className="experience-content">
				<p>{text}</p>
			</div>
			<div>
				{tags.map((tag: string, idx: number) => (
					<span key={`tag-${id}-${idx}`} className="tag">
						{tag}
					</span>
				))}
			</div>
		</div>
	);
}
