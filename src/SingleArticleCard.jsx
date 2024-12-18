import { updateArticleVotes } from './Api';
import { PostComment } from './PostComment';

export const SingleArticleCard = ({ article, setArticle }) => {
	const handleVote = () => {
		setArticle((currentArticle) => ({
			...currentArticle,
			votes: currentArticle.votes + 1,
		}));
		updateArticleVotes(article.article_id, 1);
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
			<PostComment article={article} />
		</section>
	);
};