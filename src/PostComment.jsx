import { useState } from 'react';
import { postNewComment } from './Api';

export const PostComment = ({ article }) => {
	const [newComment, setNewComment] = useState('');
	const [isPosting, setIsPosting] = useState(false);
	const [comments, setComments] = useState([]);
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

		postNewComment(article.article_id, commentData)
			.then((newComment) => {
				setComments((currComment) => [...currComment, newComment]);
				setNewComment('');
				setSuccessMsg('Comment posted successfully.');
			})
			.catch((err) => {
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
