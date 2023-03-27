import data from '../../assets/data.json';
import Job from '../Job/Job';

const JobListings = () => {
	return (
		<main className="jobListings p-2">
			{data.map((job) => {
				return <Job {...job} />;
			})}
		</main>
	);
};
export default JobListings;
