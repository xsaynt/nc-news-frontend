import { allArticles } from './Api';
import { useEffect } from 'react';
import { ArticleCard } from './ArticleCard';

export const HomeArticles = ({
	articles,
	setArticles,
	isLoading,
	setIsLoading,
}) => {
	useEffect(() => {
		setIsLoading(true);
		allArticles()
			.then((response) => {
				setArticles(response.articles);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [setArticles]);

	if (isLoading) {
		return <p>Loading article...</p>;
	}

	return (
		<ul>
			{articles.map((article) => {
				return <ArticleCard key={article.article_id} article={article} />;
			})}
		</ul>
	);
};
