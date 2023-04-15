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

	const handleTagClick = (tag) => {
		props.handleTagClick(tag);
	};
	return (
		<article className="m-3 mb-10 p-0 bg-white rounded transition-all duration-125 ease-in hover:border-l-[5px] hover:border-primary hover:cursor-pointer flex flex-col md:flex-row md:justify-between relative shadow-lg">
			<div className="flex">
				<img
					className="absolute -inset-y-[45px] scale-[.575] md:relative md:-inset-0 md:p-4 md:scale-[.95]"
					src={`/src/assets/` + logo}
				></img>
				<div className="ml-3 px-2 pt-7 md:pt-4 pb-3">
					<div className="flex my-2">
						<h3 className="text-primary font-bold mr-3">
							{company}
						</h3>
						{props.new ? (
							<span className="rounded-2xl font-bold text-white px-2 leading-loose bg-primary mr-3 text-xs">
								NEW!
							</span>
						) : null}
						{featured ? (
							<span className="rounded-2xl font-bold text-white px-2 leading-loose bg-dark-200 text-xs">
								FEATURED
							</span>
						) : null}
					</div>
					<h4 className="font-bold hover:text-primary">{position}</h4>
					<span className="text-sm text-dark-100">
						{postedAt} &#183; {contract} &#183; {location}
					</span>
				</div>
			</div>
			<ul className="flex flex-wrap text-sm md:items-center mx-3 mb-3 md:mb-0 border-t-2 border-t-accent pt-2 md:pt-0 md:border-0">
				<li
					className="bg-accent text-primary font-bold py-1 px-2 m-1 hover:text-white hover:bg-primary"
					onClick={() => handleTagClick(role)}
				>
					{role}
				</li>
				<li
					className="bg-accent text-primary font-bold py-1 px-2  m-1 hover:text-white hover:bg-primary"
					onClick={() => handleTagClick(level)}
				>
					{level}
				</li>
				{languages.map((language) => (
					<li
						className="bg-accent text-primary font-bold py-1 px-2  m-1 hover:text-white hover:bg-primary"
						key={language}
						onClick={() => handleTagClick(language)}
					>
						{language}
					</li>
				))}
				{tools.map((tool) => (
					<li
						className="bg-accent text-primary font-bold py-1 px-2  m-1 hover:text-white hover:bg-primary"
						key={tool}
						onClick={() => handleTagClick(tool)}
					>
						{tool}
					</li>
				))}
			</ul>
		</article>
	);
};
export default Job;
