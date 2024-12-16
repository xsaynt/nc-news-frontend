import { allArticles } from './Api';
import { useEffect } from 'react';
import { ArticleCard } from './ArticleCard';

export const HomeArticles = ({ articles, setArticles }) => {
	useEffect(() => {
		allArticles().then((response) => {
			setArticles(response.articles);
		});
	}, [setArticles]);

	if (!articles) {
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
