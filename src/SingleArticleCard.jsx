import { updateArticleVotes } from './Api';
import { useState } from 'react';

export const SingleArticleCard = ({ article, setArticle }) => {
	const [hasVoted, setHasVoted] = useState(false);

	const handleUpvote = () => {
		setHasVoted(true);
		setArticle((currentArticle) => ({
			...currentArticle,
			votes: currentArticle.votes + 1,
		}));
		updateArticleVotes(article.article_id, 1);
	};

	const handleDownvote = () => {
		setHasVoted(true);
		setArticle((currentArticle) => ({
			...currentArticle,
			votes: currentArticle.votes - 1,
		}));
		updateArticleVotes(article.article_id, -1);
	};

	return (
		<section>
			<div className='single-card'>
				<h2 className='single-title'>{article.title}</h2>
				<img
					className='single-item-image'
					src={article.article_img_url}
					alt={`Image of ${article.title}`}
				></img>
				<p className='single-author'>Author: {article.author}</p>
				<p className='single-date'>
					{article.created_at.split('T')[0].split('-').reverse().join('-')}
				</p>
				<p>{article.body}</p>
				<p className='single-section'>Votes: {article.votes}</p>
				<div className='voting-container'>
					<button
						onClick={handleUpvote}
						className='vote-button'
						disabled={hasVoted}
					>
						{hasVoted ? 'Voted!' : 'Upvote'}
					</button>
					<button
						onClick={handleDownvote}
						className='vote-button'
						hidden={hasVoted}
					>
						{hasVoted ? 'Voted!' : 'Downvote'}
					</button>
				</div>
				<p className='single-section'></p>
			</div>
		</section>
	);
};
