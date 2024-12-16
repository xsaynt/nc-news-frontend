import { allArticles } from './Api';
import { useEffect } from 'react';
import { SingleArticle } from './SingleArticle';

export const HomeArticles = ({ articles, setArticles }) => {
	useEffect(() => {
		allArticles().then((response) => {
			setArticles(response.articles);
		});
	}, [setArticles]);

	return (
		<ul>
			{articles.map((article) => {
				return <SingleArticle key={article.article_id} article={article} />;
			})}
		</ul>
	);
};
