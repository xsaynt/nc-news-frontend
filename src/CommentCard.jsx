export const CommentCard = ({ comment }) => {
	return (
		<ul className='comment-ul'>
			<li className='comment-card'>
				<h2>{comment.author}</h2>
				<p className='single-date'>{comment.created_at.split('T')[0]}</p>
				<p className='comment-body'>{comment.body}</p>
				<p className='single-votes'>Votes: {comment.votes}</p>
			</li>
		</ul>
	);
};
