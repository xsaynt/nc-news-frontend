import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { oneArticle, articleComments } from './Api';
import { SingleArticleCard } from './SingleArticleCard';
import { CommentCard } from './CommentCard';

export const SingleArticle = ({
	comments,
	setComments,
	isLoading,
	setIsLoading,
}) => {
	const { article_id } = useParams();
	const [article, setArticle] = useState(null);

	useEffect(() => {
		setIsLoading(true);

		oneArticle(article_id)
			.then((response) => {
				setArticle(response.article);
			})
			.catch((err) => {
				console.log(err);
			});

		articleComments(article_id)
			.then((response) => {
				setComments(response);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [article_id]);

	if (isLoading) {
		return <p>Loading article...</p>;
	}

	if (!article) {
		return <p>Sorry, no articles available.</p>;
	}

	if (!comments) {
		return <p>Sorry, no comments available.</p>;
	}

	return (
		<ul>
			<SingleArticleCard article={article} />
			{comments.map((comment) => {
				return <CommentCard key={comment.comment_id} comment={comment} />;
			})}
		</ul>
	);
};
