const Filters = ({ selectedTags, removeTag, removeAllTags }) => {
	console.log(selectedTags);
	return (
		<>
			<div className="m-3 mb-10 p-0 bg-white rounded transition-all duration-125 ease-in hover:border-l-[5px] hover:border-primary hover:cursor-pointer flex flex-col md:flex-row md:justify-between relative shadow-lg">
				{selectedTags.map((tag) => (
					<span key={tag}>
						{tag}
						<button onClick={() => removeTag(tag)}>X</button>
					</span>
				))}
				<a onClick={() => removeAllTags()}>Clear</a>
			</div>
		</>
	);
};

export default Filters;
