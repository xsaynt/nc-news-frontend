import { allArticles } from './Api';
import { useEffect, useState } from 'react';
import { ArticleCard } from './ArticleCard';
import { ShowTopics } from './ShowTopics';
import { SortArticles } from './SortArticles';
import { useSearchParams } from 'react-router-dom';

export const HomeArticles = () => {
	const [articles, setArticles] = useState(null);
	const [selectedTopic, setSelectedTopic] = useState('');
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [filteredArticle, setFilteredArticles] = useState(articles);

	const [searchParams, setSearchParams] = useSearchParams();

	const [selectedSort, setSelectedSort] = useState(
		searchParams.get('sort_by') || 'created_at'
	);
	const [selectedOrder, setSelectedOrder] = useState(
		searchParams.get('order') || 'desc'
	);

	useEffect(() => {
		setIsLoading(true);
		const sortBy = searchParams.get('sort_by') || 'created_at';
		const order = searchParams.get('order') || 'desc';
		setSelectedSort(sortBy);
		setSelectedOrder(order);

		allArticles(sortBy, order)
			.then((response) => {
				setArticles(response.articles);
				setFilteredArticles(response.articles);
			})
			.catch((err) => {
				console.error('Error fetching articles:', err);
				setError({
					status: err.response.status,
					msg: 'Error: Failed to fetch topics',
				});
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [searchParams]);

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
		return <p>Loading articles...</p>;
	}

	if (error) {
		return <p style={{ color: 'red' }}>{error}</p>;
	}

	return (
		<section>
			<div className='wrap'>
				<ShowTopics
					setSelectedTopic={setSelectedTopic}
					selectedTopic={selectedTopic}
				/>
				<SortArticles
					setSelectedSort={(sort) => {
						searchParams.set('sort_by', sort);
						setSearchParams(searchParams);
					}}
					setSelectedOrder={(order) => {
						searchParams.set('order', order);
						setSearchParams(searchParams);
					}}
					defaultSort={selectedSort}
					defaultOrder={selectedOrder}
				/>
			</div>
			<ul>
				{filteredArticle.map((article) => {
					return <ArticleCard key={article.article_id} article={article} />;
				})}
			</ul>
		</section>
	);
};
