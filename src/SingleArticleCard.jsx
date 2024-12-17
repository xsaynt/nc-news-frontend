import { useState } from 'react';
import { updateArticleVotes } from './Api';
import { postNewComment } from './Api';

export const SingleArticleCard = ({ article, setArticle }) => {
	const [newComment, setNewComment] = useState('');
	const [comments, setComments] = useState([]);

	const handleVote = () => {
		setArticle((currentArticle) => ({
			...currentArticle,
			votes: currentArticle.votes + 1,
		}));
		updateArticleVotes(article.article_id, 1);
	};

	const handleChange = (e) => {
		setNewComment(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const commentData = {
			username: 'cooljmessy',
			body: newComment,
		};

		postNewComment(article.article_id, commentData).then((newComment) => {
			setComments((currComment) => [...currComment, newComment]);
			setNewComment('');
		});
	};

	return (
		<section>
			<li className='single-card'>
				<h2>{article.title}</h2>
				<p className='single-date'>{article.created_at.split('T')[0]}</p>
				<img
					className='single-item-image'
					src={article.article_img_url}
					alt={`Image of ${article.title}`}
				></img>
				<p>{article.body}</p>
				<p className='single-author'>Author: {article.author}</p>
				<p className='single-section'>Votes: {article.votes}</p>
				<button onClick={handleVote}>Upvote!</button>
				<p className='single-section'></p>
			</li>

			<section>
				<form onSubmit={handleSubmit} className='comment-form'>
					<h3>Post a new comment</h3>
					<textarea
						onChange={handleChange}
						value={newComment}
						required
						placeholder='Write your comment here'
					/>
					<button type='submit'>Post Comment</button>
				</form>
			</section>
		</section>
	);
};
