import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { articleComments } from './Api';
import { CommentCard } from './CommentCard';

export const ArticleComments = () => {
	const { article_id } = useParams();
	const [comments, setComments] = useState([]);

	useEffect(() => {
		if (article_id) {
			articleComments(article_id).then((response) => {
				setComments(response);
			});
		}
	}, [article_id]);

	if (!comments || comments.length === 0) {
		return <p>Loading comments...</p>;
	}

	return (
		<ul>
			{comments.map((comment) => {
				return <CommentCard key={comment.comment_id} article={comment} />;
			})}
		</ul>
	);
};
