import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { oneArticle, articleComments } from './Api';
import { SingleArticleCard } from './SingleArticleCard';
import { CommentCard } from './CommentCard';
import { PostComment } from './PostComment';

export const SingleArticle = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState(null);
	const [error, setError] = useState(null);
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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
				setError('Failed to fetch article');
			});
	}, [article_id]);

	useEffect(() => {
		setIsLoading(true);

		articleComments(article_id)
			.then((response) => {
				setComments(response);
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

	if (!article) {
		return <p>Sorry, no articles available.</p>;
	}

	if (!comments) {
		return <p>Sorry, no comments available.</p>;
	}

	return (
		<ul>
			<SingleArticleCard article={article} setArticle={setArticle} />
			<PostComment article={article} setComments={setComments} />
			{comments.map((comment, index) => {
				return (
					<CommentCard
						key={index}
						comment={comment}
						article_id={article_id}
						onCommentDelete={onCommentDelete}
					/>
				);
			})}
		</ul>
	);
};
