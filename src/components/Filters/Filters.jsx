const Filters = ({ selectedTags, removeTag, removeAllTags }) => {
	console.log(selectedTags);
	if (selectedTags < 1) {
		return <div></div>;
	}
	return (
		<div className="p-2 pt-0 container m-auto mt-[-25px]">
			<section className="m-5 mt-0 md:mx-5 mb-10 p-3 bg-white rounded transition-all duration-125 ease-in hover:cursor-pointer flex justify-between items-center relative shadow-lg">
				<div className="flex items-center flex-wrap gap-y-3">
					{selectedTags.map((tag) => (
						<span
							key={tag}
							className="bg-accent inline-block text-primary font-bold text-xs md:text-sm truncate h-8 py-0 pl-2 mx-2 rounded-md"
						>
							{tag}
							<button
								className="bg-primary text-white h-8 text-xs px-2 ml-2 hover:bg-dark-200"
								onClick={() => removeTag(tag)}
							>
								X
							</button>
						</span>
					))}
				</div>
				<a
					onClick={() => removeAllTags()}
					className="pl-2 md: px-3 text-dark-100 hover:text-primary hover:underline"
				>
					Clear
				</a>
			</section>
		</div>
	);
};

export default Filters;
