export const SingleArticleCard = ({ article }) => {
	return (
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
			<p className='single-section'></p>
		</li>
	);
};
