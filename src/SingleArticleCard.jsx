export const SingleArticleCard = ({ article }) => {
	console.log(article, '<<< ARTICLE CARD');
	console.log(article.article.article_id);
	return (
		<li className='card'>
			<h2>{article.article.title}</h2>
			<img
				className='item-image'
				src={article.article.article_img_url}
				alt={`Image of ${article.article.title}`}
			></img>
			<p>Author: {article.article.author}</p>
			<p>Comments: {article.article.comment_count}</p>
			<p>Votes: {article.article.votes}</p>
		</li>
	);
};
