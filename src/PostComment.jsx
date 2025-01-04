import { useState } from 'react';
import { postNewComment } from './Api';

export const PostComment = ({ article, setComments }) => {
	const [newComment, setNewComment] = useState('');
	const [isPosting, setIsPosting] = useState(false);
	const [error, setError] = useState(null);
	const [successMsg, setSuccessMsg] = useState('');

	const handleChange = (e) => {
		setNewComment(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPosting(true);
		setError(null);
		setSuccessMsg('');

		const commentData = {
			username: 'cooljmessy',
			body: newComment,
		};

		const tempComment = {
			comment_id: Date.now(),
			body: newComment,
			article_id: article.article_id,
			author: 'cooljmessy',
			votes: 0,
			created_at: new Date().toISOString(),
		};

		setComments((currComments) => [tempComment, ...currComments]);

		postNewComment(article.article_id, commentData)
			.then((responseComment) => {
				setComments((currComments) =>
					currComments.map((comment) =>
						comment.comment_id === tempComment.comment_id
							? { ...comment, ...responseComment }
							: comment
					)
				);
				setNewComment('');
				setSuccessMsg('Comment posted successfully.');
			})
			.catch((err) => {
				setComments((currComments) =>
					currComments.filter(
						(comment) => comment.comment_id !== tempComment.comment_id
					)
				);
				setError('Failed to post comment');
				console.error('Error posting comment:', err);
			})
			.finally(() => {
				setIsPosting(false);
			});
	};

	return (
		<section>
			<form onSubmit={handleSubmit} className='comment-form'>
				<h3>Post a new comment</h3>
				<textarea
					onChange={handleChange}
					value={newComment}
					required
					placeholder='Write your comment here'
					className='comment-box'
					maxLength={500}
				/>
				<button type='submit' disabled={isPosting}>
					{isPosting ? 'Posting...' : 'Post Comment'}
				</button>
			</form>
			{successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</section>
	);
};
