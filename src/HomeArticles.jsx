import { allArticles } from './Api';
import { useEffect, useState } from 'react';
import { ArticleCard } from './ArticleCard';
import { ShowTopics } from './ShowTopics';

export const HomeArticles = ({
	articles,
	setArticles,
	isLoading,
	setIsLoading,
}) => {
	const [filteredArticle, setFilteredArticles] = useState(articles);
	const [selectedTopic, setSelectedTopic] = useState('');
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		allArticles()
			.then((response) => {
				setArticles(response.articles);
				setFilteredArticles(response.articles);
			})
			.catch((err) => {
				console.error('Error fetching articles:', err);
				setError('Failed to fetch articles');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [setArticles, setIsLoading]);

	useEffect(() => {
		if (selectedTopic) {
			const articleFilter = articles.filter(
				(article) => article.topic === selectedTopic
			);
			setFilteredArticles(articleFilter);
		} else {
			setFilteredArticles(articles);
		}
	}, [selectedTopic, articles]);

	if (isLoading) {
		return <p>Loading article...</p>;
	}

	if (error) {
		return <p style={{ color: 'red' }}>{error}</p>;
	}

	return (
		<section>
			<ShowTopics setSelectedTopic={setSelectedTopic} />
			<ul>
				{filteredArticle.map((article) => {
					return <ArticleCard key={article.article_id} article={article} />;
				})}
			</ul>
		</section>
	);
};
