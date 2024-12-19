import { useEffect, useState } from 'react';
import { allTopics } from './Api';
import { useNavigate } from 'react-router-dom';

export const ShowTopics = ({ setSelectedTopic }) => {
	const [topics, setTopics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const handleChange = (e) => {
		const topicValue = e.target.value;
		setSelectedTopic(topicValue);
		if (topicValue) {
			navigate(`/topics/${topicValue}`);
		} else {
			navigate('/articles');
		}
	};

	useEffect(() => {
		allTopics()
			.then((response) => {
				setTopics(response.topics);
			})
			.catch((err) => {
				console.error('Error fetching topics:', err);
				setError('Failed to fetch topics');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <p>Loading topics...</p>;
	}

	if (error) {
		return <p style={{ color: 'red' }}>{error}</p>;
	}

	return (
		<div>
			<select onChange={handleChange}>
				<option value=''>All Topics</option>
				{topics.map((topic) => {
					return (
						<option key={topic.slug} value={topic.slug}>
							{topic.slug}
						</option>
					);
				})}
			</select>
		</div>
	);
};
