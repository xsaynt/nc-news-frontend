import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { oneArticle } from './Api';
import { SingleArticleCard } from './SingleArticleCard';
import { PostComment } from './PostComment';
import { CommentList } from './CommentsList';

export const SingleArticle = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState(null);
	const [error, setError] = useState(null);
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);

		oneArticle(article_id)
			.then((response) => {
				console.log(response);
				setArticle(response.article);
			})
			.catch((err) => {
				console.log(err);
				setError('Failed to fetch article');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [article_id]);

	if (error) {
		return <p style={{ color: 'red' }}>{error}</p>;
	}

	if (isLoading) {
		return <p>Loading article...</p>;
	}

	return (
		<ul>
			<SingleArticleCard article={article} setArticle={setArticle} />
			<PostComment article={article} setComments={setComments} />
			<CommentList />
		</ul>
	);
};
