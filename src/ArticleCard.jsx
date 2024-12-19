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
				<p>{article.created_at.split('T')[0]}</p>
				<p>Author: {article.author}</p>
				<p>Votes: {article.votes}</p>
			</Link>
		</li>
	);
};
