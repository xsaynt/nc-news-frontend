import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { oneArticle } from './Api';
import { SingleArticleCard } from './SingleArticleCard';

export const SingleArticle = ({ articles, setArticles }) => {
	const { article_id } = useParams();

	useEffect(() => {
		if (article_id) {
			oneArticle(article_id).then((response) => {
				setArticles(response);
			});
		}
	}, [article_id]);

	if (!articles) {
		return <p>Loading article...</p>;
	}

	return (
		<ul>
			<SingleArticleCard key={articles.article_id} article={articles} />
		</ul>
	);
};
