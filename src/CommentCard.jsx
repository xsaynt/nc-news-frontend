import { useState } from 'react';
import { deleteComment } from './Api';

export const CommentCard = ({ comment, article_id, onCommentDelete }) => {
	const [targetUser, setTargetUser] = useState('cooljmessy');
	const [isDeleting, setIsDeleting] = useState(false);
	const [error, setError] = useState(null);

	const handleClick = () => {
		setIsDeleting(true);
		setError(null);

		deleteComment(article_id, comment.comment_id)
			.then(() => {
				onCommentDelete(comment.comment_id);
			})
			.catch((err) => {
				setError('Failed to delete comment');
				console.error('Error deleting comment:', err);
			})
			.finally(() => {
				setIsDeleting(false);
			});
	};

	const isUserMatching = comment.author === targetUser;

	return (
		<ul className='comment-ul'>
			<li className='comment-card'>
				<h2>{comment.author}</h2>
				<p className='single-date'>
					{comment.created_at.split('T')[0].split('-').reverse().join('-')}
				</p>
				<p className='comment-body'>{comment.body}</p>
				<p className='single-votes'>Votes: {comment.votes}</p>
				{isUserMatching && (
					<button onClick={handleClick} disabled={isDeleting}>
						{isDeleting ? 'Deleting...' : 'Delete Comment'}
					</button>
				)}
			</li>
		</ul>
	);
};
