const Job = (props) => {
	const {
		id,
		company,
		contract,
		featured,
		languages,
		level,
		location,
		logo,
		position,
		postedAt,
		role,
		tools,
	} = props;
	console.log(props);
	return (
		<article className=" bg-dark-100 m-3 p-5 ">
			<div className="flex m-1">
				<img src={`/src/assets/` + logo}></img>
				<h3>{company}</h3>
				{props.new ? <span className="">NEW!</span> : null}
				{featured ? <span>FEATURED</span> : null}
			</div>
			<h4>{position}</h4>
			<div>
				{postedAt} {contract} {location}
			</div>
			<ul className="flex">
				<li>{role}</li>
				<li>{level}</li>
				{languages.map((language) => (
					<li>{language}</li>
				))}
				{tools.map((tool) => (
					<li>{tool}</li>
				))}
			</ul>
		</article>
	);
};
export default Job;
