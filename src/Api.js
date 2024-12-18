import axios from 'axios';

const articleApi = axios.create({
	baseURL: 'https://my-nc-news-yn9b.onrender.com',
});
export const allArticles = () => {
	return articleApi.get('/api/articles').then((response) => response.data);
};

export const oneArticle = (article_id) => {
	return articleApi
		.get(`/api/articles/${article_id}`)
		.then((response) => response.data);
};

export const articleComments = (article_id) => {
	return articleApi
		.get(`/api/articles/${article_id}/comments`)
		.then((response) => response.data);
};

export const updateArticleVotes = (article_id, inc_votes) => {
	return articleApi
		.patch(`/api/articles/${article_id}`, { inc_votes })
		.then((response) => response.data);
};

export const postNewComment = (article_id, comment) => {
	return articleApi
		.post(`/api/articles/${article_id}/comments`, comment)
		.then((response) => response.data);
};

export const deleteComment = (article_id, comment_id) => {
	return articleApi
		.delete(`/api/articles/${article_id}/comments/${comment_id}`)
		.then((response) => response.data || null);
};
