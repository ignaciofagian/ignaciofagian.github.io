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
				text={
					<>
						<ul>
							<li>Developer of a market order managment system with ReactJS and nodeJS.</li>
							<li>Developer of a real time system using websocket (socketio) technolo- gies.</li>
							<li>Technical leader & Software architect.</li>
							<li>
								Part of the developing team of large project using ReactJS, NodeJS and Genexus as
								technologies.
							</li>
							<li>
								Developer of a market order routing platform using FIX Protocol with a plugin system
								architecture built in NetCore 3.
							</li>
						</ul>
					</>
				}
			/>

			<Item
				id="2"
				title="MVOT - Direccion de Ordenamiento Territorial"
				subtitle="Full stack GIS developer 2016 - now"
				logo="assets/gubuy-logo.png"
				tags={['C#', 'SQLServer', 'React', 'NodeJS', 'CSS', 'Python', 'GIS']}
				text={
					<>
						<ul>
							<li>Developer of web map viewer (ArcGIS js, ReactJS).</li>
							<li>Geoprocess implementation published as web service.</li>
							<li>GIS data base designer (PostGIS, SQLServer).</li>
							<li>GIS Infrastructure management (ArcGIS Server, Portal for ArcGIS, GeoServer).</li>
							<li>Developer of several GIS tools.</li>
							<li>Maintenance of several systems developed in .Net (C#).</li>
						</ul>
					</>
				}
			/>

			<Item
				id="2"
				title="PNUD - Platform project"
				subtitle="Full stack GIS 2021"
				logo="assets/gubuy-logo.png"
				tags={['C#', 'SQLServer', 'React', 'NodeJS', 'CSS', 'GIS']}
				text={
					<>
						<ul>
							<li>Development of a GIS dashboard Platform using NextJS, Sequelize and ArcGIS JS.</li>
						</ul>
					</>
				}
			/>

			<Item
				id="4"
				title="Brokerware"
				subtitle="Junior developer 2014"
				logo="assets/bw-logo.png"
				tags={['SQLServer', 'Genexus']}
				text={
					<>
						<ul>
							<li>Maintenance of several systems using Genexus Evo3 (c#) as the main technology.</li>
							<li>Development in AngularJS technology.</li>
							<li>Solution to several performance issues.</li>
							<li>Implementation of chart components using D3js.</li>
						</ul>
					</>
				}
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
