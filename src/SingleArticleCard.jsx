import { Link } from 'react-router-dom';

export const SingleArticleCard = ({ article }) => {
	return (
		<li className='single-card'>
			<h2>{article.article.title}</h2>
			<p className='single-date'>{article.article.created_at.split('T')[0]}</p>
			<img
				className='single-item-image'
				src={article.article.article_img_url}
				alt={`Image of ${article.article.title}`}
			></img>
			<p>{article.article.body}</p>
			<p className='single-author'>Author: {article.article.author}</p>
			<Link to={`/${article.article.article_id}/comments`}>View Comments</Link>
			<p className='single-votes'>Votes: {article.article.votes}</p>
		</li>
	);
};
