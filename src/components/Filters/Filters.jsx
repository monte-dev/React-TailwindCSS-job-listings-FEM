const Filters = ({ selectedTags, removeTag }) => {
	return (
		<div className="filters">
			{selectedTags.map((tag) => (
				<span key={tag}>
					{tag}
					<button onClick={() => removeTag(tag)}>X</button>
				</span>
			))}
		</div>
	);
};

export default Filters;
