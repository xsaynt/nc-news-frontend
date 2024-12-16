export const SingleArticle = ({ article }) => {
	console.log(article);
	return (
		<li className='card'>
			<h2>{article.title}</h2>
			<img
				className='item-image'
				src={article.article_img_url}
				alt={`Image of ${article.title}`}
			></img>
			<p>Author: {article.author}</p>
			<p>Comments: {article.comment_count}</p>
			<p>Votes: {article.votes}</p>
		</li>
	);
};
