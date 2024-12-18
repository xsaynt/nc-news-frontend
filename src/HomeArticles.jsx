import { allArticles } from './Api';
import { useEffect, useState } from 'react';
import { ArticleCard } from './ArticleCard';

export const HomeArticles = ({
	articles,
	setArticles,
	isLoading,
	setIsLoading,
}) => {
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		allArticles()
			.then((response) => {
				setArticles(response.articles);
			})
			.catch((err) => {
				console.error('Error fetching articles:', err);
				setError('Failed to fetch articles');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [setArticles, setError]);

	if (isLoading) {
		return <p>Loading article...</p>;
	}

	if (error) {
		return <p style={{ color: 'red' }}>{error}</p>;
	}

	return (
		<ul>
			{articles.map((article) => {
				return <ArticleCard key={article.article_id} article={article} />;
			})}
		</ul>
	);
};
