import { useState } from 'react';
import { Filters, JobListings } from './components';

function App() {
	// initialize state to empty array
	const [selectedTags, setSelectedTags] = useState([]);

	const handleTagClick = (tag) => {
		if (!selectedTags.includes(tag)) {
			setSelectedTags([...selectedTags, tag]);
		}
	};

	const removeTag = (tag) => {
		setSelectedTags(selectedTags.filter((t) => t !== tag));
	};

	const removeAllTags = () => {
		setSelectedTags([]);
	};
	return (
		<div className="bg-background h-full font-main text-dark-200">
			<Filters
				selectedTags={selectedTags}
				removeTag={removeTag}
				removeAllTags={removeAllTags}
			/>
			<JobListings
				selectedTags={selectedTags}
				handleTagClick={handleTagClick}
			/>
		</div>
	);
}

export default App;
