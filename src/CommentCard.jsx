export const CommentCard = ({ article }) => {
	return (
		<ul className='comment-ul'>
			<li className='comment-card'>
				<h2>{article.author}</h2>
				<p className='single-date'>{article.created_at.split('T')[0]}</p>
				<p className='comment-body'>{article.body}</p>
				<p className='single-votes'>Votes: {article.votes}</p>
			</li>
		</ul>
	);
};
