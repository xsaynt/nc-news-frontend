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
	const [error, setError] = useState(null);

	const onCommentDelete = (deletedCommentId) => {
		setComments((currComments) =>
			currComments.filter((comment) => comment.comment_id !== deletedCommentId)
		);
	};

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
			.catch((err) => {
				console.error('Error fetching article:', err);
				setError('Failed to fetch article');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [article_id, setError]);

	if (error) {
		return <p style={{ color: 'red' }}>{error}</p>;
	}

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
			<SingleArticleCard article={article} setArticle={setArticle} />
			{comments.map((comment) => {
				return (
					<CommentCard
						key={comment.comment_id}
						comment={comment}
						article_id={article_id}
						onCommentDelete={onCommentDelete}
					/>
				);
			})}
		</ul>
	);
};
