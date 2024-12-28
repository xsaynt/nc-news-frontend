import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentCard } from './CommentCard';
import { articleComments } from './Api';

export const CommentList = ({ comments, setComments }) => {
	const { article_id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const onCommentDelete = (deletedCommentId) => {
		setComments((currComments) =>
			currComments.filter((comment) => comment.comment_id !== deletedCommentId)
		);
	};

	useEffect(() => {
		setIsLoading(true);

		articleComments(article_id)
			.then((response) => {
				setComments(response);
			})
			.catch((err) => {
				console.log(err);
				setError('Failed to fetch comments');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [article_id]);

	if (!comments || comments.length === 0) {
		return <p>Sorry, no comments available.</p>;
	}

	if (error) {
		return <p style={{ color: 'red' }}>{error}</p>;
	}

	if (isLoading) {
		return <p>Loading comments...</p>;
	}

	console.log(comments, 'COMMENTSLIST');

	return (
		<ul>
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
