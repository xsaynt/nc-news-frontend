import { useEffect, useState } from 'react';
import { allTopics } from './Api';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const ShowTopics = ({ setSelectedTopic, selectedTopic }) => {
	const [topics, setTopics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

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

	const handleChange = (e) => {
		const topicValue = e.target.value;
		setSelectedTopic(topicValue);
		if (topicValue) {
			searchParams.set('topic', topicValue);
			setSearchParams(searchParams);
			navigate(`/topics/${topicValue}`);
		} else {
			searchParams.delete('topic');
			setSearchParams(searchParams);
			navigate('/articles');
		}
	};

	if (isLoading) {
		return <p>Loading topics...</p>;
	}

	if (error) {
		return <p style={{ color: 'red' }}>{error}</p>;
	}

	return (
		<div>
			<select value={selectedTopic} onChange={handleChange}>
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
