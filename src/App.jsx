import { useState } from 'react';
import { Filters, Job, JobListings } from './components';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className=" bg-background h-screen text-center font-main text-dark-200">
			<Filters />
			<JobListings />
		</div>
	);
}

export default App;
