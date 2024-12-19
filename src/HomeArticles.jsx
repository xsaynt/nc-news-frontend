import { allArticles } from './Api';
import { useEffect, useState } from 'react';
import { ArticleCard } from './ArticleCard';
import { ShowTopics } from './ShowTopics';
import { SortArticles } from './SortArticles';

export const HomeArticles = () => {
	const [articles, setArticles] = useState(null);
	const [selectedTopic, setSelectedTopic] = useState('');
	const [error, setError] = useState(null);
	const [selectedSort, setSelectedSort] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [filteredArticle, setFilteredArticles] = useState(articles);

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
	}, []);

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

	useEffect(() => {});

	if (isLoading) {
		return <p>Loading article...</p>;
	}

	if (error) {
		return <p style={{ color: 'red' }}>{error}</p>;
	}

	return (
		<section>
			<ShowTopics setSelectedTopic={setSelectedTopic} />
			{/* <SortArticles setSelectedSort={setSelectedSort}/> */}
			<ul>
				{filteredArticle.map((article) => {
					return <ArticleCard key={article.article_id} article={article} />;
				})}
			</ul>
		</section>
	);
};
