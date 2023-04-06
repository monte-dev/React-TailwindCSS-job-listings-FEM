import data from '../../assets/data.json';
import Job from '../Job/Job';

const JobListings = ({ selectedTags, handleTagClick }) => {
	const filterJobs = (job) => {
		const tags = [job.role, job.level, ...job.languages, ...job.tools];
		return selectedTags.every((tag) => tags.includes(tag));
	};

	return (
		<main className="jobListings p-2 container md:max-w-fit m-auto">
			{data.map((job, index) => {
				return (
					<Job
						key={job.id}
						handleTagClick={handleTagClick}
						{...job}
					/>
				);
			})}
		</main>
	);
};
export default JobListings;
