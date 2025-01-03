import { Link } from 'react-router-dom';

export const ArticleCard = ({ article }) => {
	return (
		<li className='card'>
			<Link to={`/articles/${article.article_id}`} className='card-link'>
				<h2>{article.title}</h2>
				<img
					className='item-image'
					src={article.article_img_url}
					alt={`Image of ${article.title}`}
				></img>
				<p>{article.author}</p>
				<p>{article.created_at.split('T')[0].split('-').reverse().join('-')}</p>
				<p>Votes: {article.votes}</p>
			</Link>
		</li>
	);
};
